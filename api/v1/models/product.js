const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    member: {
        type: Boolean,
        required: true
    },

    random: {
        type: Number,

    }
})



module.exports = mongoose.model('product', productSchema);