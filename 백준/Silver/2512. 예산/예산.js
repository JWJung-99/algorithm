let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let requests = input[1].split(" ").map(Number);
let budget = Number(input[2]);

let start = 1;
let end = Math.max(...requests);

let answer = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  requests.forEach((item) => {
    total += Math.min(item, mid);
  });

  if (total <= budget) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);