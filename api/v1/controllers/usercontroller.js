const user = require('../models/user')




module.exports.save = (req, res) => {

    const { name, email, password } = req.body

    const User = new user({
        name: name,
        email: email,
        password: password
    })

    user.find({ email: email })
        .then((result) => {

            if (result.length > 0) {
                res.status(401).json({ msg: 'user is Exists !', result: result })
            } else {
                User.save()
                res.status(201).json({ msg: '  ** user created **', result: user.find() })
            }

        }).catch((err) => {
            res.status(500).json({ err: err })
            console.log(err)
        });




}


module.exports.hi = (req, res) => {

    res.status(200).json({ msggg: "welcooome " })
}