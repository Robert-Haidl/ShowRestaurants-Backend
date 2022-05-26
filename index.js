const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

const app = express();
app.use(cors())
app.use(bodyParser.json());

/** Force ssl */
app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`)
    else
    next()
  })

const restaurantRoute = require('./routes/restaurantRoute');

app.use('/api/restaurants', restaurantRoute);



app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server listens on port ${port}!`);
});


mongoose.connect(process.env.DB_CONNECTION,  { useNewUrlParser: true }, () =>
console.log('Connected to mongodb!'));
