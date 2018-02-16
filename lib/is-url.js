// Check to see if a string is a correct URL format
// https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url#answer-3809435
module.exports = function isURL(str) {
  'use strict';
  const pattern = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
  return pattern.test(str);
};
