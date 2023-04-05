var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let productsRouter = require('./routes/products');
let ordersRouter = require('./routes/orders');

const mongoose = require('mongoose');

var app = express();

async function init() {
    await mongoose.connect("mongodb://127.0.0.1:27017/filippa_soderlund")
    .then (() => console.log('databasen är igång'));
}

init();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

module.exports = app;
