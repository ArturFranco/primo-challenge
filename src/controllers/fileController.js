const fs = require('fs');
const S3Helper = require('../aws/s3-helper');

class FileController {

  constructor() {
    this.s3 = new S3Helper();
  }

  listFiles = async (req, res) => {
    try {
      const files = await this.s3.listObjects();
      const filesList = files.Contents.map(fileObj => fileObj.Key);

      res.send({ files: filesList });
    } catch (err) {
      res.status(400).send({
        error: 'Error when listing S3 files',
        message: err.message
      });
    }
  }

  showFile = async (req, res) => {
    try {
      const file = await this.s3.getObject(req.params.filename);

      res.send({ file });
    } catch (err) {
      res.status(400).send({
        error: `Error when showing S3 file ${req.params.filename}`,
        message: err.message
      });
    }
  }

  uploadFile = async (req, res) => {
    try {
      const { name, data, mimetype } = req.files.file;

      await this.s3.putObject(name, data, mimetype);
      res.send({ message: `File ${name} was created on S3`});
    } catch (err) {
      res.status(400).send({
        error: `Error when creating file ${req.files.file.name} on S3`,
        message: err.message
      });
    }
  }

  deleteFile = async (req, res) => {
    try {
      const { filename } = req.params;

      await this.s3.deleteObject(filename);
      res.send({ message: `S3 file ${filename} deleted` });
    } catch (err) {
      res.status(400).send({
        error: `Error when deleting S3 file ${req.params.filename}`,
        message: err.message
      });
    }
  }
}

module.exports = FileController;