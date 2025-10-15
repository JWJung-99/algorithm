let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const h = input[1].split(" ").map(Number);

let cnt = 0;
let arr = new Array(1000001).fill(0);

for (let x of h) {
  if (arr[x] > 0) {
    arr[x] -= 1;
    arr[x - 1] += 1;
  } else {
    arr[x - 1] += 1;
    cnt++;
  }
}

console.log(cnt);
