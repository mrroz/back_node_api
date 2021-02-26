const bodyParser = require('body-parser')
const express = require('express')
const app = express()
    //////////////////////////////////////////////
    //////////////////////////////////////
const productRoutes = require('./api/v1/routes/product')

///////////////////////////////////////

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/product', productRoutes)




/////////////////////////// not found
app.use((req, res, next) => {
    res.status(404).json({
        msg: "not found rout"
    })

})





app.listen(3000, console.log('running ...'))