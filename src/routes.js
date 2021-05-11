const router = require('express').Router();
const FileController = require('./controllers/fileController');

const controller = new FileController();

router.get('/', (req, res) => res.send('Online!'));

router.get('/files', controller.listFiles);
router.get('/file/:filename', controller.showFile);
router.post('/file', controller.uploadFile);
router.delete('/file/:filename', controller.deleteFile);

module.exports = router;