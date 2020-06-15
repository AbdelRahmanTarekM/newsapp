const express = require('express');
const app = express();
const port = 3000;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('87240d9eeeac4ce1a16c84ede93928ce');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));