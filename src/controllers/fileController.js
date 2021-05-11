class FileController {

  constructor() {}

  listFiles = async (req, res) => {
    try {
      res.send({ message: 'S3 files list' });
    } catch (err) {
      res.status(400).send({ error: 'Error when listing S3 files' });
    }
  }

  showFile = async (req, res) => {
    try {
      res.send({ message: `S3 file ${req.params.name}` });
    } catch (err) {
      res.status(400).send({ error: `Error when showing S3 file ${req.params.name}` });
    }
  }

  uploadFile = async (req, res) => {
    try {
      const { fileName } = req.body;
      res.send({ message: `File ${fileName} was created on S3`});
    } catch (err) {
      res.status(400).send({ error: 'Error when creating file on S3' })
    }
  }

  deleteFile = async (req, res) => {
    try {
      res.send({ message: `S3 file ${req.params.name} deleted` });
    } catch (err) {
      res.status(400).send({ error: `Error when deleting S3 file ${req.params.name}` });
    }
  }
}

module.exports = FileController;