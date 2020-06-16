const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('87240d9eeeac4ce1a16c84ede93928ce');

app.use(cors())

app.get('/eg', (req, res) => {
    newsapi.v2.topHeadlines({
        country: 'eg',
      }).then(response => {
        // console.log(response);
        res.send(response);
      });
    // res.send('Hello World!');
});

app.get('/ae', (req,res)=>{
    newsapi.v2.topHeadlines({
        country: 'ae'
      }).then(response => {
        // console.log(response);
        res.send(response);
      });
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));