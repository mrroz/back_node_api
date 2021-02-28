const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const uploadImg = multer({ storage: storage }).single('image');

/////////////////////////////////////////





router.post('/', uploadImg, (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        member: req.body.member,
        image: req.file.path,
        random: Math.floor(Math.random() * Math.floor(99))
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



router.delete('/:id', (req, res) => {
    const id = req.params.id
    Product.remove({ _id: id })
        .then((result) => {

            console.log("deleted!")
            console.log(result)
            res.status(200).json({
                msg: "deleted!",
                result: result

            })

        }).catch((err) => {
            console.log("error!")
            console.log("err!")
            res.status(500).json({
                msg: "not deletet!",
                err: err
            })
        });

})






module.exports = router