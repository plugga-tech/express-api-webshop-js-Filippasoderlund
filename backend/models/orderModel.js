const mongoose = require('mongoose');

const orderSchema = mongoose.Schema ({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
    },
    products: [{
        productId: {
        type: mongoose.Types.ObjectId,
        ref: 'products'
        },
        quantity: Number
    }]
});

module.exports = mongoose.model('orders', orderSchema);