import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);

let graph = Array.from(Array(N + 1), () => []);
let distance = Array(N + 1).fill(-1);

for (let i = 2; i <= M + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);

  graph[a].push(b);
  graph[b].push(a);
}

let queue = [];
queue.push(1);
distance[1] = 0;

while (queue.length > 0) {
  let friend = queue.shift();

  for (let person of graph[friend]) {
    if (distance[person] === -1) {
      distance[person] = distance[friend] + 1;
      queue.push(person);
    }
  }
}

const answer = distance.filter((item) => item > 0 && item < 3);
console.log(answer.length);
