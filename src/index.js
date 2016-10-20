var uniqueRandomArray = require('unique-random-array');
var priparaNames = require('./pripara-name.json');

module.exports = {
    all: priparaNames,
    random: uniqueRandomArray(priparaNames)
};
