const express = require('express');
const scrapers = require('./scrapers');


const app = express();

app.get('/getnews/:keyword', async (req, res, next) => {

    const keyword = req.params.keyword;

    try {
        res.send(await scrapers.processKeywordSearch(keyword));
    } catch(err) {
        next(err)
      }
});

app.get('/wk', async (req, res, next) => {

    try {
        res.send(await scrapers.processCountWords());
    } catch(err) {
        next(err)
      }
});

app.listen('8080');

exports = module.exports = app;