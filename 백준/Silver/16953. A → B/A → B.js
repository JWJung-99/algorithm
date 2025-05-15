let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let cnt = 0;
let able = false;

while (b > 0) {
  if (b % 2 === 0) {
    cnt += 1;
    b /= 2;
  } else if (b % 10 === 1) {
    cnt += 1;
    b -= 1;
    b /= 10;
  } else {
    break;
  }

  if (a === b) {
    able = true;
    console.log(cnt + 1);
    break;
  }
}

if (!able) console.log(-1);