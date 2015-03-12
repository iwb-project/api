// exposes the package.json

var fs = require('fs');

var loaded = JSON.parse(fs.readFileSync('package.json', 'utf8'));

module.exports = loaded;