let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, K, X] = input[0].split(" ").map(Number);
const graph = Array.from(Array(N + 1), () => []);
let distance = Array(N + 1).fill(-1);

for (let i = 1; i <= M; i++) {
  let [from, to] = input[i].split(" ").map(Number);

  graph[from].push(to);
}

let queue = [];
// 출발 도시, 현재 이동 거리
distance[X] = 0;
queue.push(X);

while (queue.length > 0) {
  let curX = queue.shift();

  for (let neighbor of graph[curX]) {
    if (distance[neighbor] !== -1) continue;

    distance[neighbor] = distance[curX] + 1;
    queue.push(neighbor);
  }
}

let canReach = false;

for (let i = 1; i <= N; i++) {
  if (distance[i] === K) {
    console.log(i);
    canReach = true;
  }
}

if (!canReach) console.log(-1);