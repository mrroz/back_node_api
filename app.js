const bodyParser = require('body-parser')
const express = require('express')
const { options } = require('./api/v1/routes/product')
const app = express()
var cors = require('cors')
    //////////////////////////////////////////////
    //////////////////////////////////////
const productRoutes = require('./api/v1/routes/product')

///////////////////////////////////////

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', '*')
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', '*')
//         return res.status(200).json({}).next()
//     }

// })
app.use(cors())



app.use('/product', productRoutes)




/////////////////////////// not found
app.use((req, res, next) => {
    res.status(404).json({
        msg: "not found rout"
    })

})





app.listen(3000, console.log('running ...'))