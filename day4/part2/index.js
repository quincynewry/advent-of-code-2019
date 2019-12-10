var lower = 234208;
var upper = 765869;
var count = 0;

function run() {
    for (var i = lower; i <= upper; i++) {
        if (check(i)) {
            count++
        }
    }

    console.log(count);
}

function check(num) {
    var originalDigits = num.toString().split('')
    var digits = num.toString().split('');
    var match = false;
    var scales = false;
    var previous = digits[0];
    var uniques = [];
    digits.shift();

    for(var d in digits) {
        var digit = digits[d];

        if (uniques.filter(x => x == digit).length == 0) {
            uniques.push(digit);
        }

        if (previous <= digit) {
            scales = true;
        } else {
            scales = false;
            break;
        }

        previous = digit;
    }
    
    for(var u in uniques) {
        if (originalDigits.filter(x => x == uniques[u]).length == 2) {
            match = true;
            break;
        }
    }

    return match && scales;
}

run();