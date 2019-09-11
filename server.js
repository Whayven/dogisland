const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const dogs = require('./routes/dogs');

app.use('/dogs', dogs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));