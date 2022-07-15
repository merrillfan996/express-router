let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'client/dist')));

//激活路由
const {apiRouter} = require('./app/routes/index');
app.use(apiRouter);

module.exports = app;
