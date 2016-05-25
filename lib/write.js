// Write
// write a new file
module.exports = function write(file, content) {
  'use strict';
  const fs = require('fs');
  fs.writeFile(file, content, function (err) {
    if(err) {
      console.log(err);
    } else {
      return console.log('Updated ' + file);
    }
  });
};