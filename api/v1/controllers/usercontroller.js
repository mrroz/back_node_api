const user = require('../models/user')

const bcrypt = require('bcryptjs')




module.exports.save = (req, res) => {

    const { name, email, password } = req.body

    user.find({ email: email })
        .then((result) => {
            if (result.length >= 1) {

                res.status(200).json({ result: 'user is Exists !!' })


            } else {

                bcrypt.hash(password, 12, (err, hash) => {

                    if (err) {
                        res.json({ err_in_hash: err })

                    } else {

                        const User = new user({
                            name: name,
                            email: email,
                            password: hash

                        })
                        User.save()
                            .then((result) => {
                                res.json({ ok_in_save: result })
                            }).catch((err) => {
                                res.json({ err_in_save: err })
                            });



                    }
                })

            }


        }).catch((err) => {

            res.json({ err: err })
            console.log(err);
        });



}


module.exports.hi = (req, res) => {

    res.status(200).json({ msggg: "welcooome " })
}



// user.find({ email: email })
// .then((result) => {

//     if (result.length == 1) {
//         res.status(401).json({ msg: 'user is Exists !', result: result })
//     } else {

//         bcrypt.hash(password, 12, (err, hash) => {

//             if (err) {
//                 res.status(401).json({ err_hash: err })
//             } else {
//                 const User = new user({
//                     name: name,
//                     email: email,
//                     password: hash
//                 })

//                 User.save()
//                     .then((result) => {
//                         console.log(result);
//                     }).catch((err) => {
//                         console.log(err);
//                     });


//             }
//         })

//         User.save()
//         res.status(201).json({ msg: '  ** user created **', result: user.find() })
//     }

// }).catch((err) => {
//     res.status(500).json({ err_catch: err })
//     console.log(err)
// });