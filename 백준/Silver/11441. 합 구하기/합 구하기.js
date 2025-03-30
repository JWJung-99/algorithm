let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let arr = [0, ...input[1].split(" ").map(Number)];
let M = Number(input[2]);
let prefixSum = [0];

let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += arr[i];
  prefixSum.push(sum);
}

for (let i = 3; i < M + 3; i++) {
  let [from, to] = input[i].split(" ").map(Number);

  console.log(prefixSum[to] - prefixSum[from - 1]);
}