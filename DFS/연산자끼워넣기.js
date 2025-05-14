import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const num = input[1].split(" ").map(Number);
let [add, sub, mul, div] = input[2].split(" ").map(Number);

let minValue = 1e9;
let maxValue = -1e9;

const DFS = (index, value) => {
  if (index === N) {
    minValue = Math.min(minValue, value);
    maxValue = Math.max(maxValue, value);
    return;
  }

  if (add > 0) {
    add--;
    DFS(index + 1, value + num[index]);
    add++;
  }
  if (sub > 0) {
    sub--;
    DFS(index + 1, value - num[index]);
    sub++;
  }
  if (mul > 0) {
    mul--;
    DFS(index + 1, value * num[index]);
    mul++;
  }
  if (div > 0) {
    div--;
    DFS(index + 1, ~~(value / num[index]));
    div++;
  }
};

DFS(1, num[0]);

console.log(maxValue);
console.log(minValue);
