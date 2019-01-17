'use strict';
const mkdirp = require('mkdirp');
const write = require('../lib/write');
// Templates
const main = require('./main');

//content
const clothingContent = require('../content/shirts.json');

// tshirt page
module.exports = function content(page, title, desc) {
  // create directory
  mkdirp.sync(`./${page}/`);

  console.log(' length ' + clothingContent.length);

  let mens = '';
  let womens = '';
  for (let item in clothingContent) {
    const itemTitle = clothingContent[item].title;
    const itemImage = clothingContent[item].image;
    const itemPrice = clothingContent[item].price;
    const itemUrl = clothingContent[item].url;
    const sex = clothingContent[item].sex;

    if (itemTitle !== undefined) {
      if (sex === 'male') {
        mens += `<li><a href="${itemUrl}"><img src="/public/img/shirts/${itemImage}" alt="${itemTitle} t-shirt" /><h3>${itemTitle}</h3><p>${itemPrice}</p></a></li>`;
      }else {
        womens += `<li><a href="${itemUrl}"><img src="/public/img/shirts/${itemImage}" alt="${itemTitle} t-shirt" /><h3>${itemTitle}</h3><p>${itemPrice}</p></a></li>`;
      }
    }
  }

  // create index.html for page
  write(`./${page}/index.html`, main(page, `<div class="container"><h2>Mens</h2><ul class="shirts">${mens}</ul><h2>Womens</h2><ul class="shirts">${womens}</ul></div>`, title, desc));
};