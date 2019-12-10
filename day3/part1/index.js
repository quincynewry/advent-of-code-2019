const fs = require('fs');
const path = require("path");

var overlaps = [];
var positions = [];

function mapPath(input, secondWire) {
    var directions = input.split(',');

    var currentPosition = {x: 0, y:0};
    positions.push(currentPosition);
    
    for (var d in directions) {
        var item = directions[d];
        var direction = item.substr(0, 1);
        var length = item.replace(direction, '');
        var i = 0;
        var nextPosition = {...currentPosition};

        while(i < length) {
            switch(direction) {
                case 'R':
                    nextPosition.x += 1;
                    break;
                case 'L':
                    nextPosition.x -= 1;
                    break;
                case 'U':
                    nextPosition.y += 1;
                    break;
                case 'D':
                    nextPosition.y -= 1;
                    break;
            }

            currentPosition = {...nextPosition};

            if (secondWire && positions.find(p => { return p.x == nextPosition.x && p.y == nextPosition.y})) {
                console.log(nextPosition);
                overlaps.push(currentPosition);
            }

            if (!secondWire) {
                positions.push(currentPosition);
            }

            i++;
        }
    };
}


function run() {
    var lines = fs.readFileSync(path.resolve(__dirname, "../input.txt"), 'utf-8')
            .split('\r\n')
            .filter(Boolean);

    mapPath(lines[0], false);
    mapPath(lines[1], true);

    var lowest = 100000;

    for(var p in overlaps) {
        var position = overlaps[p];

        var length = Math.abs(position.x) + Math.abs(position.y);

        if (length < lowest) {
            lowest = length;
        }
    }

    console.log(lowest);
}

run()