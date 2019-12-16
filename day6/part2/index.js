const fs = require('fs');
const path = require("path");

var dictionary = {};
var youPath = [];
var santaPath = [];

function run() {
    var lines = fs.readFileSync(path.resolve(__dirname, "../input.txt"), 'utf-8')
            .split('\r\n')
            .filter(Boolean);

    lines.forEach(e => {
        var orbits = e.split(')');

        if (dictionary[orbits[0]]) {
            dictionary[orbits[0]].push(orbits[1]);
        } else {
            dictionary[orbits[0]] = [orbits[1]];
        }
    });

    var youKey = findKey('YOU');
    var santaKey = findKey('SAN');

    var currentKey = youKey;

    while (currentKey != 'COM') {
        youPath.push(currentKey);
        var currentKey = findKey(currentKey);
    }

    var currentKey = santaKey;

    while (currentKey != 'COM') {
        santaPath.push(currentKey);
        var currentKey = findKey(currentKey);
    }

    var comb = youPath.concat(santaPath);
    var count = 0;
    for(var i in comb) {
        if (comb.filter(x => x == comb[i]).length == 1) {
            count++;
        }
    }
    
    console.log(count);
}

function findKey(finder) {
    for (var prop in dictionary) {
        if (Object.prototype.hasOwnProperty.call(dictionary, prop) && dictionary[prop].filter(x => x == finder).length > 0) {
            return prop;
        }
    }
}

run()