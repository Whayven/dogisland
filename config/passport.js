const LocalStrategy = require('passport-local').Strategy;
const mongodb = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const bcrypt = require('bcryptjs');

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
let User;
const client = async () => {
    return await openConnection()
}
client().then((req, res) => {
    User = req.db('dogisland').collection('users');
}).catch(e => console.log(e))

module.exports = async function (passport) {
    passport.use(
        new LocalStrategy({
            usernameField: 'email'
        }, async (email, password, done) => {
            await User.findOne({
                    "email": email
                })
                .then(user => {
                    if (!user) {
                        return done(null, false, {
                            message: 'That email is not registered'
                        });
                    }

                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, {
                                message: 'Password incorrect'
                            })
                        }
                    })
                })
        })
    );
    passport.serializeUser((user, done) => {        
        done(null, user._id);
    });

    passport.deserializeUser(async (_id, done) => {
        await User.findOne({_id: new ObjectID(_id)}, (err, user) =>{
            done(err, user);
        })
    });
}