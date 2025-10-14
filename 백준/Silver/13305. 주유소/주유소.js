let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let distance = input[1].split(' ').map(Number);
let oilPrice = input[2].split(' ').map(Number);

let minPrice = oilPrice[0];

for (let i = 0; i < n; i++) {
  minPrice = Math.min(minPrice, oilPrice[i]);
  oilPrice[i] = minPrice;
}

let answer = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  answer += BigInt(distance[i]) * BigInt(oilPrice[i]);
}

console.log(String(answer));