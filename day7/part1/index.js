function compute(inputs, program) {
    // convert to array
    var sequence = program.split(',');

    var index = 0;
    var instruction = padInstruction(sequence[index]);
    var params = instruction.split('');
    var opcode = params[3] + params[4];
    var instructions = [instruction];

    while(opcode != 99) {
        if (opcode == 1) {
            var val1 = params[2] == 0 ? sequence[sequence[index + 1]] : sequence[index + 1]; 
            var val2 = params[1] == 0 ? sequence[sequence[index + 2]] : sequence[index + 2]; 
            var val = parseInt(val1) + parseInt(val2);
            sequence[sequence[index + 3]] = val.toString();
            index += 4;
        } else if (opcode == 2) {
            var val1 = params[2] == 0 ? sequence[sequence[index + 1]] : sequence[index + 1]; 
            var val2 = params[1] == 0 ? sequence[sequence[index + 2]] : sequence[index + 2]; 

            var val = parseInt(val1) * parseInt(val2);
            sequence[sequence[index + 3]] = val.toString();

            index += 4;
        } else if (opcode == 3) {
            sequence[sequence[index + 1]] = inputs.shift().toString();
            index += 2;
        } else if (opcode == 4) {
            var val = params[2] == 0 ? sequence[sequence[index + 1]] : sequence[index + 1];
            return val;
            index += 2;
        } else if (opcode == 5) {
            var val1 = params[2] == 0 ? sequence[sequence[index + 1]] : sequence[index + 1]; 
            var val2 = params[1] == 0 ? sequence[sequence[index + 2]] : sequence[index + 2];
            if (val1 == 0) {
                index += 3;
            } else {
                index = parseInt(val2);
            }
        } else if (opcode == 6) {
            var val1 = params[2] == 0 ? sequence[sequence[index + 1]] : sequence[index + 1]; 
            var val2 = params[1] == 0 ? sequence[sequence[index + 2]] : sequence[index + 2];
            if (val1 == 0) {
                index = parseInt(val2);
            } else {
                index += 3;
            }
        } else if (opcode == 7) {
            var val1 = params[2] == 0 ? sequence[sequence[index + 1]] : sequence[index + 1]; 
            var val2 = params[1] == 0 ? sequence[sequence[index + 2]] : sequence[index + 2];
            if (val1 < val2) {
                sequence[sequence[index + 3]] = 1;
            } else {
                sequence[sequence[index + 3]] = 0;
            }

            index += 4;
        } else if (opcode == 8) {
            var val1 = params[2] == 0 ? sequence[sequence[index + 1]] : sequence[index + 1]; 
            var val2 = params[1] == 0 ? sequence[sequence[index + 2]] : sequence[index + 2];
            if (val1 == val2) {
                sequence[sequence[index + 3]] = 1;
            } else {
                sequence[sequence[index + 3]] = 0;
            }

            index += 4;
        } else {
            break;
        }

        instruction = padInstruction(sequence[index]);
        instructions.push(instruction);
        params = instruction.split('');
        opcode = params[3] + params[4];
    }
}

function padInstruction(val) {
    // pad to 10,000 value
    var i = 4;
    var split = val.split('');
    var padded = '';

    while(i >= 0) {
        var num = split.pop();
        padded = num ? num + padded : "0" + padded;
        i--;
    }
    return padded;
}

const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
        result.push(m)
        } else {
        for (let i = 0; i < arr.length; i++) {
            let curr = arr.slice();
            let next = curr.splice(i, 1);
            permute(curr.slice(), m.concat(next))
        }
        }
    }

    permute(inputArr)

    return result;
}

function run() {
    const program = "3,8,1001,8,10,8,105,1,0,0,21,38,55,72,93,118,199,280,361,442,99999,3,9,1001,9,2,9,1002,9,5,9,101,4,9,9,4,9,99,3,9,1002,9,3,9,1001,9,5,9,1002,9,4,9,4,9,99,3,9,101,4,9,9,1002,9,3,9,1001,9,4,9,4,9,99,3,9,1002,9,4,9,1001,9,4,9,102,5,9,9,1001,9,4,9,4,9,99,3,9,101,3,9,9,1002,9,3,9,1001,9,3,9,102,5,9,9,101,4,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,99,3,9,101,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,99";
    var output = 0;
    var max = 0;

    var permutations = permutator([0,1,2,3,4])
    
    permutations.forEach(p => {
        output = 0;
        p.forEach(e => {
            output = parseInt(compute([e,output], program));
        });

        console.log(output);

        if (output > max) {
            max = output;
        }
    });

    console.log('Max:', max);
}

run()