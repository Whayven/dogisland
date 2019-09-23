const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');

const app = express();

require('./config/passport')(passport);

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  name: 'mysession',
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use('/api/index', require('./routes/api/index'));
app.use('/api/dogs', require('./routes/api/dogs'));
app.use('/api/users', require('./routes/api/users'));


// Handle Production
// Static Folder
app.use(express.static(__dirname + '/public'));
// Handle SPA
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));