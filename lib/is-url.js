// Contains
// Check to see if a string is a correct URL format
module.exports = function isURL(str) {
  'use strict';
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+=:]*)*'+ // port and path
    '(\\?[;&a-zA-Z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-zA-Z\\d\\/_]*)?$', 'i'); // fragment locator
  return pattern.test(str);
};
