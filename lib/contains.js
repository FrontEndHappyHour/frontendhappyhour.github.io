// Contains
// Check to see if Array contains
module.exports = Array.prototype.contains = function (needle) {
  'use strict';
   for (let i in this) {
      if (this[i] === needle) {
        return true;
      }
   }
   return false;
};