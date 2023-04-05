var express = require('express');
var router = express.Router();

const orderSchema = require('../models/orderModel.js');
const productSchema = require('../models/productModel.js');

/* GET home page. */
router.post('/add', async (req, res, next) => {

});

router.get('/all', async(req, res, next) => {
  const orders = await orderSchema.find();
    res.json(orders);
});

module.exports = router;
