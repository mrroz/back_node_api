const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },

    qty: {
        type: Number,
        required: true
    },
    member: {
        type: Boolean,
        required: true
    },

})



module.exports = mongoose.model('order', orderSchema);