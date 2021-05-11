const serverless = require('serverless-http');
const express = require('express');
const fileUpload = require('express-fileupload');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(routes);

app.listen(3000);

module.exports.handler = serverless(app);