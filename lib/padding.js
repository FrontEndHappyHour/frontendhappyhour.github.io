// Padding
// add padding to episode number
module.exports = function pad(n, width, z) {
  'use strict';
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};