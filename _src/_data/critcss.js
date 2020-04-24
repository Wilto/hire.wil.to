const fs = require('fs');

module.exports = {
  getCSS(path) {
    return `/* ${__dirname}${path} */`;
  }
};