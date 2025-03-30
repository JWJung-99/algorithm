import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let N = Number(input[0]);

let d = new Array(10000001).fill(0);

d[1] = 1;
d[2] = 2;

for (let i = 3; i <= N; i++) {
  d[i] = (d[i - 1] + d[i - 2]) % 15746;
}

console.log(d[N]);
