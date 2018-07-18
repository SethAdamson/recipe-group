const bcrypt = require('bcryptjs')
var sessionIDCount = 1;

module.exports = {
    registerUser: (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        db.checkEmail([email]).then(user => {
            console.log(user);
            if (user.length !== 0) {
                res.status(200).send('email taken. Try another.')
            } else {
                const salt = bcrypt.genSaltSync(10)
                console.log('salt: ', salt)
                const hash = bcrypt.hashSync(password, salt)
                console.log('hash: ', hash)

                db.registerUser([email, hash]).then((user) => {
                    req.session.user.sessionID = sessionIDCount
                    sessionIDCount++
                    req.session.user.userID = user[0].userID
                    req.session.user.email = user[0].email
                    console.log('registered: ', req.session)
                    res.status(200).send(user)
                })
                    .catch((e) => {
                        console.log(e);
                        res.status(500).send(e)
                    })
            }
        })
    },
    loginUser: (req, res) => {
        const { email, password } = req.body
        const db = req.app.get('db')
        db.checkEmail([email]).then(user => {
            if (user.length !== 0) {

                const validPassword = bcrypt.compareSync(password, user[0].password)
                if (validPassword) {
                    console.log(user)
                    req.session.user.sessionID = sessionIDCount
                    sessionIDCount++
                    req.session.user.userID = user[0].userID
                    req.session.user.email = user[0].email
                    res.status(200).send(user)
                    console.log(req.session.user)
                } else {
                    res.status(200).send('Invalid Password')
                }
            } else {
                res.status(200).send('User does not exist')
            }
        })
            .catch((e) => {
                console.log(e);
                res.status(500).send(e)
            })
    },
    allRecipes: (req, res, next) => {
        const db = req.app.get('db');
        db.allRecipes()
            .then((recipes) => res.status(200).send(recipes))
            .catch((e) => {
                console.log(e)
                res.status(500).send(e)
            })
    },
    newRecipe: (req, res, next) => {
        const db = req.app.get('db');
        const { name, steps, rating, prepT, serves, difLevel, cost, comments, img, apiID } = req.body;
        db.newRecipe([name, steps, rating, prepT, serves, difLevel, cost, comments, img, apiID])
            .then(() => res.status(200).send())
            .catch((e) => {
                console.log(e);
                res.status(500).send(e)
            })
    },
    updateRecipe: (req, res, next) => {
        const db = req.app.get('db');
        const { name, steps, rating, prepT, serves, difLevel, cost, comments, img } = req.body;
        db.updateRecipe([name, steps, rating, prepT, serves, difLevel, cost, comments, img])
            .then(() => res.status(200).send())
            .catch((e) => {
                console.log(e)
                res.status(500).send(e)
            })
    },
    deleteRecipe: (req, res, next) => {
        const db = req.app.get('db');
        const { recipeID } = req.body;
        db.deleteRecipe([recipeID])
            .then(() => res.status(200).send())
            .catch((e) => {
                console.log(e)
                res.status(500).send(e)
            })
    }
}
