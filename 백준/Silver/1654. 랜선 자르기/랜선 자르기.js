let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [k, n] = input[0].split(" ").map(Number);
let lines = [];

for (let i = 1; i <= k; i++) {
  lines.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...lines);

let answer = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let cnt = 0;

  lines.forEach((item) => {
    cnt += parseInt(item / mid);
  });

  if (cnt < n) end = mid - 1;
  else {
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);