var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/test/:testId', function(req, res){
    let showTest = req.params.testId
    res.send("Test routern och info om test nr" + showTest)
});

app.get("/form", function(req, res){

    let printForm = `<h1>Hej!</h1>
                    <form>Namn<br>
                    <input type="text" name="userName">
                    <button>Skicka</button></form>`
    
    res.send(printForm);
});

app.post("/saveuser", function(req, res){

    res.send("Hej på dig" + req.body.userName);

});


module.exports = app;
