var express = require('express');
var router = express.Router();

const productSchema = require('../models/productModel.js');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const products = await productSchema.find()
    res.send(products);
})

router.get('/:id', async function(req, res, next) {
  const product = req.params.id;
  const foundProduct = await productSchema.findOne({ _id: product});
    res.send(foundProduct);
});

router.post('/add', async function(req, res, next) {
  const products = await productSchema.create(req.body)
    res.send(products);
})

module.exports = router;
