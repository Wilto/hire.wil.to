const fs = require('fs');

module.exports = {
  getCSS(path) {
    return `/* ${__dirname}${path} */` + fs.readFileSync(`${__dirname}${path}`, 'utf-8');
  }
};