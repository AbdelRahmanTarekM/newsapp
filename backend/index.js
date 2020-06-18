const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
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

app.post('/register', (req, res) => {
    let name = req.body.name;
    //Randomly generated password
    let password = Math.random().toString(36).slice(-8);
    console.log(password);
    let email = req.body.email;
    let birthDate = req.body.birthdate;
    bcrypt.hash(password, 8, (err, encryptedPassword) => {
        if (err) {
            console.log(err);
        } else {
            let user = new User({ name, email, password: encryptedPassword, birthDate });
            user.save().then(result => {
                console.log(result)
                //TODO: send Password via nodemailer
                res.send(result)
            }).catch(err => { console.log(err); res.send({ success: false }) });
        }
    });
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email })
        .then(user => {
            if (!user) {
                res.send('user not found');
            }
            else {
                bcrypt.compare(password, user.password,
                    (err, same) => {
                        if (err) {
                            res.send('something went wrong');
                        } else {
                            if (!same) {
                                res.send('wrong password');
                            } else {
                                let authToken = Math.random().toString(36);
                                user.authToken = authToken;
                                user.save();
                                res.send({ authToken, favorites: user.favorites });
                            }
                        }
                    })
            }
        })
})

app.post('/favorites/add', (req, res) => {
    const authToken = req.body.authToken;
    const urlToImage = req.body.urlToImage;
    const title = req.body.title;
    const author = req.body.author;
    const publishedAt = req.body.publishedAt;
    const description = req.body.description;
    const url = req.body.url;

    User.findOne({ authToken })
        .then(user => {
            if(!user){
                res.send('bad request');
            }else{
                user.favorites.push({urlToImage,title,author,publishedAt,description,url});
                user.save()
                res.send(user.favorites);
            }
        })
})

app.post('/favorites/remove', (req,res)=>{
    const authToken = req.body.authToken;
    const id = req.body._id;

    User.findOne({authToken})
        .then(user=>{
            if(!user){
                res.send('bad request')
            } else {
                user.favorites = user.favorites.filter((value,i,arr)=>{
                    return value._id != id;
                });
                user.save();
                res.send(user.favorites);
            }
        })
})
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));