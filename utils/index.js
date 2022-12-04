const fs = require('fs');
const path = require('path');

module.exports = {
    parseData: day => fs.readFileSync(path.join(__dirname, '..', day, 'input.txt'), 'utf-8')
};
