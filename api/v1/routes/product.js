const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')


/////////////////////////////////////////

router.post('/', productController.uploadImg, productController.addProduct)


router.get('/', productController.showAll)


router.get('/:id', productController.showById)



router.delete('/:id', productController.deleteById)



module.exports = router