const express = require('express')
const router = express.Router()
const Product = require('../models/product')
    /////////////////////////////////////////



router.delete('/', (req, res) => {
    res.send('delete request to the product')
})

router.post('/', (req, res) => {

    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        member: req.body.member
    })
    product.save()
        .then((result) => {
            res.status(200).json({
                msg: "created!",
                result: result
            })
        }).catch((err) => {
            res.status(500).json({
                msg: "error",
                err: err
            })
        });

})


router.get('/', (req, res) => {
    Product.find()
        .then((result) => {
            console.log(result)
            res.status(201).json({
                msg: result
            })

        }).catch((err) => {

            console.log(err)
            res.status(201).json({
                msg: "not found"
            })
        });



})


router.get('/:id', (req, res) => {
    const id = req.params.id
    Product.findById({ _id: id })

    .then((result) => {

        console.log(result)
        res.status(201).json({
            msg: result
        })

    }).catch((err) => {
        console.log(err)
        res.status(201).json({
            msg: "not found"
        })

    });

})




router.get('/:id', (req, res) => {
    const data = {
        msg: 'response',
        prof: req.params.id
    }
    res.status(200).json({
        status: "good !",
        data: data
    })
})



module.exports = router