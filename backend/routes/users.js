const { log } = require('console');
var express = require('express');
var router = express.Router();

const userSchema = require('../models/userModel.js');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await userSchema.find().select('name email');
    res.json(users);
});

router.post('/', async (req, res, next) => {
  const user = await userSchema.findOne();
    res.json(user);
});

router.post('/add', async (req, res, next) =>{ 
  let newUser = {name: req.body.name, email: req.body.email};
  const saveUser = await userSchema.create(newUser)
    res.send(saveUser);
});

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userSchema.findOne({ email, password });
    res.json(user);
  
});

module.exports = router;
