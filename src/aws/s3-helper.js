const AWS = require('aws-sdk');

class S3Helper {

  constructor () {
    const credentials = new AWS.Credentials({
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY
    });
    this.s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      credentials
    });
  }

  listObjects = async () => {
    const params = {
      Bucket: process.env.BUCKET
    };

    return await this.s3.listObjectsV2(params).promise();
  }

  getObject = async (fileName) => {
    const params = {
      Bucket: process.env.BUCKET,
      Key: fileName
    }

    return await this.s3.getObject(params).promise();
  }

  putObject = async (fileName, fileContent, mimetype) => {
    const params = {
      Body: fileContent,
      Bucket: process.env.BUCKET,
      ContentType: mimetype,
      Key: fileName
    };

    await this.s3.putObject(params).promise();
  }

  deleteObject = async (fileName) => {
    const params = {
      Bucket: process.env.BUCKET,
      Key: fileName
    }

    await this.s3.deleteObject(params).promise();
  }
}

module.exports = S3Helper;
