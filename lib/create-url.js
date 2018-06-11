// Create episode URLs
module.exports = function createURL(str) {
  'use strict';
  const url = str.replace(/ /g, '-').toLowerCase().replace(/---|:-/g, '-').replace(/,|"|\./g, '').replace(/'/g, '').replace(/\?/g, '').replace(/a\/b/g, 'ab').trim();
  return url;
};