var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Välkommen till user router');
});

router.get("/newuser", function(req, res){

  res.send("new user routern");
});

router.post("/newuser", function(req, res){
  console.log(req.body);

  let answer;

  if (req.body.firstName == "Janne") {
    answer = {"result": "ok"}
  } else {
    answer = {"result": "error"}
  }

  res.json(answer);

});

module.exports = router;
