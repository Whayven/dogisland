const express = require('express');
const mongodb = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

router.get('/login', async (req, res) => {
    res.send('Login');
})

router.get('/register', async (req, res) => {
    res.send('Register');
})

router.post('/register', async (req, res) => {
    const client = await openConnection();
    const Users = client.db('dogisland').collection('users');
    const {
        name,
        email,
        password,
        password2
    } = req.body;
    let msg = "";

    // Check field completion
    if (!name || !email || !password || !password2) {
        msg = "Please fll in all the fields!";
    }
    // Check password length
    else if (password.length < 6) {
        msg = "Password should be at least 6 characters!";
    }

    // Check passwords match
    else if (password !== password2) {
        msg = "Passwords do not match!"
    }

    // Confirm validation then check for email duplicate
    if (msg) {
        res.status(400).send(msg);
    } else {
        Users.findOne({
                email: email
            })
            .then(user => {
                if (user) {
                    msg = "Email is already registered!"
                    res.send(msg);
                } else {
                    const newUser = {
                        name,
                        email,
                        password,
                        date: new Date()
                    }
                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        // Hash Password
                        newUser.password = hash;
                        // Insert new user
                        Users.insertOne(newUser)
                            .then(client.close())
                            .then(res.send("Registered successfully"))
                    }))


                }
            })
    }

})

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(400).send(info.message);
        }

        req.login(user, err => {
            res.send("Logged in");
        });
    })(req, res, next);
})

const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(401).send('You are not authenticated')
    } else {
        return next()
    }
}
router.get("/user", authMiddleware, async (req, res) => {
    const client = await openConnection();
    const Users = client.db('dogisland').collection('users');
    await Users.findOne({
        "_id": new ObjectID(req.session.passport.user)
    })
    .then(user => {
        res.send(user)
    })
})

router.get("/logout", function (req, res) {
    req.logout();
    return res.send("Logged out");
});

async function openConnection() {
    try {
        const client = await mongodb.connect('mongodb+srv://dogAdmin:dogs43v3r@cluster0-o3njd.mongodb.net/test?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return client;
    } catch (e) {
        console.log(e);
    }

}

module.exports = router;