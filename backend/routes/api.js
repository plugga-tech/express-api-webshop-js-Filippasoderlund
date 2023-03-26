var express = require('express');
var router = express.Router();
const fs = require('fs');
const { ObjectId } = require("mongodb");

/**
 * let users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jane'},
  {id: 3, name: 'Bob'},
  {id: 4, name: 'Alice'},
  {id: 5, name: 'Bengt'}
]
 */

/* GET users listing. */
router.get('/users', function(req, res, next) {

    fs.readFile("user.json", function(err, data) {
        if (err) {
            console.log(err);
        }

        const users = JSON.parse(data)

        res.send("Alla users")
        return;
    })
});

router.post('/users', function(req, res, next) {
    let newUser = { name: req.body.name };
    
    console.log("new user", newUser);
    
    req.app.locals.db.collection("users").insertOne(newUser)
    .then(result => {
        console.log("resultat från db", result);
        res.json(result);
    })
});

router.get('/add', function(request, response, next) {
    fs.readFile('user.json', function(error, data){
      if (error === true) {
          console.log(error)
      }
  
      const users = JSON.parse(data);
  
      response.send(users);
      return;
  
    });
});
  
router.post('/add', function(req, res) {
  
    console.log(req, body);
  
    fs.readFile("users.json", function(err, data){
      if (err){
        console.log(err);
  
        if (err.code == "ENOENT") {
          console.log("Filen finns ej");
  
          let users = [{"name": "Herbert", "email": "herbert@gmail.com", "password": 123, "id": 1}]
  
          fs.writeFile("users.json", JSON.stringify(users, null, 2), function(err) {
            if (err) {
                console.log(err);
            }
          })
  
          res.send("Fil skapad och ny användare sparad");
          return;
        }
  
        res.send("404 - Nått gick fel!")
      }
  
      const users = JSON.parse(data);
  
      let newUser = {"name": req.body.name, "email": req.body.email}
      
      users.push(newUser);
  
      console.log(newUser);
  
      fs.writeFile("users.json", JSON.stringify(users, null, 2), function(err) {
        if (err) {
            console.log(err);
        }
      })
  
      res.send("Ok");
      
    });
});
  
  

router.get('/users/login', function(req, res, next) {
  res.send("loginroutern");
});

router.post('/users/login', function(req, res, next) {
    const { email, password } = req.body;
    fs.readFile("users.json", function(err, data){
      if(err) {
        console.log(err)
      }
      let users = JSON.parse(data);
      const foundUser = users.find(user => user.name === name);
  
      if(password === foundUser.password) {
        res.status(201).json({name: foundUser.userName, id: foundUser.userId})
      }
      else {
        res.status(401).json("Incorrect password or username")
      }
      return;
    })
  });

router.get('/users/:userId', function(req, res, next) {
  userId = req.params.userId;
  console.log(userId);

  req.app.locals.db.collection("users").findOne({"_id": new ObjectId(userId)})
  .then(result => {
    console.log("Hitta user", result);

    res.json(result)
  })
});

router.get("/users/newuser", function(req, res){

  res.send("new user routern");
});

router.post("/users/newuser", function(req, res){
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