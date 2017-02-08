// Create episode URLs
module.exports = function createURL(str) {
  'use strict';
  const url = '/episodes/' + str.replace(/ /g, '-').toLowerCase().replace(/---/g, '-').replace(/:-/g, '-').replace(/,/g, '').trim();
  return url;
};