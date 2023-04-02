var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let productsRouter = require('./routes/products');


var app = express();

const MongoClient = require("mongodb").MongoClient;

app.use(cors());

MongoClient.connect("mongodb://127.0.0.1:27017", {
    useUnifiedTopology: true
})
.then(client => {
    console.log("Uppkopplade mot databesen");

    const db = client.db("userstest");
    app.locals.db = db; 
})
.catch(err => console.log("err", err))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);



module.exports = app;
