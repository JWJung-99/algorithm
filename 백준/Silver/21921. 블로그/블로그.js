let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, X] = input[0].split(" ").map(Number);
let visitors = [0, ...input[1].split(" ").map(Number)];

let sum = 0;
for (let i = 1; i <= X; i++) {
  sum += visitors[i];
}

let maxSum = sum;
let count = 1;

let left = 1;
let right = X;

while (true) {
  left += 1;
  right += 1;

  if (right > N) break;

  sum = sum + visitors[right] - visitors[left - 1];

  if (maxSum < sum) {
    maxSum = sum;
    count = 1;
  } else if (maxSum === sum) {
    count++;
  }
}

if (maxSum === 0) console.log("SAD");
else {
  console.log(maxSum + "\n" + count);
}