const fs = require('fs');
const path = require("path");

var orbitsCount = 0;
var dictionary = {};

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

    // start at COM
    var key = "COM";

    // loop for COM
    loopOrbits(key);

    for (var prop in dictionary) {
        if (Object.prototype.hasOwnProperty.call(dictionary, prop) && prop != 'COM') {
            loopOrbits(prop);
        }
    }

    console.log(orbitsCount);
}

function loopOrbits(key) {
    var directOrbits = dictionary[key];
    for(var i in directOrbits) {
        var orbit = directOrbits[i];
        orbitsCount++
        loopOrbits(orbit);
    }
}

run()