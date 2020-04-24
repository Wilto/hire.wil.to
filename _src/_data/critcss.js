const fs = require('fs');
const path = require('path');

module.exports = {
  getCSS(relPath) {
    return fs.readFileSync( path.join( `${__dirname}/tmp/crit.css` ), 'utf-8' );
  }
};