const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./Models/User');
const port = 3000;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('87240d9eeeac4ce1a16c84ede93928ce');

app.use(cors())
app.use(bodyParser.json());

//Mongoose configuration
mongoose.connect('mongodb://localhost/news_app',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        console.log('mongoDB err: ', err);
    });

app.post('/news', (req, res) => {
    let country = req.body.country;
    let category = req.body.category;
    newsapi.v2.topHeadlines({
        country: country,
        category: category
    }).then(response => {
        res.send(response);
    });
});

app.get('/', (req, res) => {
    let user = new User({ name: 'Homie test', email: 'homie@email.test', password: 'xyz' });
    user.save().then(result => console.log(result)).catch(err => console.log(err));
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));