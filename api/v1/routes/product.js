const express = require('express')
const router = express.Router()
    /////////////////////////////////////////

router.get('/', (req, res) => {
    res.send('GET request to the product ...')
})


router.delete('/', (req, res) => {
    res.send('delete request to the product')
})

router.post('/', (req, res) => {
    let my


    const data = {
        name: req.body.name,
        age: req.body.age,
        member: req.body.member
    }

    res.status(200).json({
        person: "hello",
        info: data,
        sec: "okkkkkkkkkkk"

    })

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