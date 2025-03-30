import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let testCase = Number(input[0]);
let arr = new Array(41).fill(0);
arr[0] = 1;
arr[1] = 1;

for (let i = 2; i <= 40; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

for (let i = 1; i <= testCase; i++) {
  let num = Number(input[i]);

  if (num === 0) console.log("1 0");
  else if (num === 1) console.log("0 1");
  else console.log(`${arr[num - 2]} ${arr[num - 1]}`);
}
