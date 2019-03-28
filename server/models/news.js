'use strict';

const axios = require('axios');
const keys = require('../config/keys');
// query helper function
const getRandomNews = async () => {
  const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=tw&page=1&pageSize=5&apiKey=${keys.NEWS_API_KEY}`);
  const data_index = Math.floor(Math.random() * news.data.articles.length);
  const data = news.data.articles[data_index];
  return {
    title: data.title,
    description: data.description,
    source: data.source.name,
    url: data.url,
  };
};

module.exports = {
  getRandomNews,
};
