const fs = require('fs');
const path = require("path");

function run() {
    var totalFuel = 0;
    var lines = fs.readFileSync(path.resolve(__dirname, "../../input.txt"), 'utf-8')
            .split('\r\n')
            .filter(Boolean);

    lines.forEach(e => {
        var mass = parseInt(e);
        var fuel = 0;

        while(mass > 0) {
            mass = Math.floor(mass / 3) -2;
            if (mass > 0) {
                fuel += mass;
            }
        }

        totalFuel += fuel;
    });

    console.log(totalFuel);
}

run()