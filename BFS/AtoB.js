import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);
let visited = new Set();

let found = false;

let queue = [];
queue.push([A, 0]);

while (queue.length > 0) {
  let [curNum, dist] = queue.shift();

  if (curNum > 1e9) continue;

  if (curNum === B) {
    console.log(dist + 1);
    found = true;
    break;
  }

  if (!visited.has[curNum * 2]) {
    queue.push([curNum * 2, dist + 1]);
    visited.add(curNum * 2);
  }

  if (!visited.has[curNum * 10 + 1]) {
    queue.push([curNum * 10 + 1, dist + 1]);
    visited.add(curNum * 10 + 1);
  }
}

if (!found) {
  console.log(-1);
}
