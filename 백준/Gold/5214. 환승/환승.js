let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K, M] = input[0].split(" ").map(Number);
let graph = Array.from(Array(N + M + 1), () => []);
let distance = Array(N + M + 1).fill(-1);

for (let i = 1; i <= M; i++) {
  let arr = input[i].split(" ").map(Number);

  for (let x of arr) {
    graph[x].push(N + i);
    graph[N + i].push(x);
  }
}

let queue = [];
queue.push(1);
distance[1] = 0;
let found = false;

while (queue.length > 0) {
  let curPos = queue.shift();

  if (curPos === N) {
    found = true;
    break;
  }

  for (let neighbor of graph[curPos]) {
    if (distance[neighbor] === -1) {
      distance[neighbor] = distance[curPos] + 1;
      queue.push(neighbor);
    }
  }
}

if (found) {
  console.log(distance[N] / 2 + 1);
} else {
  console.log(-1);
}
