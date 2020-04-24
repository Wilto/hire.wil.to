const fs = require('fs');

module.exports = {
  getCSS(path) {
    return fs.readFileSync(`${__dirname}/../..${path}`, 'utf-8');
  }
};