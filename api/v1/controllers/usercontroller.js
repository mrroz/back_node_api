const user = require('../models/user')

const bcrypt = require('bcryptjs')




module.exports.singup = (req, res) => {

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


module.exports.login = (req, res) => {

    const { email, password } = req.body

    user.find({ email: email })
        .then((result) => {

            if (result.length == 0) {
                res.status(401).json({ res: "not found user" })
            } else {

                console.log(result[0].email);

                bcrypt.compare(password, result[0].password, (err, result) => {

                    if (err) {
                        res.status(401).json({ err_in_compare: err })
                    } else if (result) {
                        res.status(200).json({ result: 'ok', user: result })
                    } else {
                        res.status(401).json({ err_in_compare2: "password is falae" })
                    }

                })
            }


        }).catch((err) => {
            console.log(err);
            res.status(401).json({ err_in_catch: err })
        });

}




module.exports.allUser = (req, res) => {
    user.find()
        .then((result) => {
            if (result.length == 0) {
                console.log('not anyone ');
                res.json({ msg_allUser: 'not anyone Exsists user for show !!' })
            } else {

                res.json({ res: result })
            }


        }).catch((err) => {
            console.log('errrr ');
            res.json({ err_alluser: err })

        });
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