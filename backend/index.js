const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3000;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('87240d9eeeac4ce1a16c84ede93928ce');

app.use(cors())
app.use(bodyParser.json());

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

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));