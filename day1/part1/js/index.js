const fs = require('fs');
const path = require("path");

function run() {
    var fuel = 0;
    var lines = fs.readFileSync(path.resolve(__dirname, "../../input.txt"), 'utf-8')
            .split('\r\n')
            .filter(Boolean);

    lines.forEach(e => {
        var mass = parseInt(e);

        fuel += Math.floor(mass / 3) -2;
    });

    console.log(fuel);
}

run()