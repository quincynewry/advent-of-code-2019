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
    var digits = num.toString().split('');
    var match = false;
    var scales = false;
    var previous = digits[0];
    digits.shift();

    for(var d in digits) {
        var digit = digits[d];

        if (previous == digit) {
            var match = true;
        }

        if (previous <= digit) {
            scales = true;
        } else {
            scales = false;
            break;
        }

        previous = digit;
    }

    return match && scales;
}

run();