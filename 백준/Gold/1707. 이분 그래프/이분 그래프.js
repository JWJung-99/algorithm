let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);
let index = 1;

function bfs(x, graph, visited) {
  let queue = [];
  queue.push(x);
  visited[x] = 0;

  while (queue.length > 0) {
    x = queue.shift();

    for (let n of graph[x]) {
      if (visited[n] === -1) {
        queue.push(n);
        // 0 -> 1, 1 -> 0
        visited[n] = (visited[x] + 1) % 2;
      }
    }
  }
}

function isBipartite(graph, visited) {
  for (let i = 1; i < visited.length; i++) {
    for (let n of graph[i]) {
      if (visited[i] === visited[n]) return false;
    }
  }

  return true;
}

while (testCase > 0) {
  let [v, e] = input[index].split(" ").map(Number);

  // graph 생성
  let graph = Array.from(Array(v + 1), () => []);
  for (let i = 0; i < e; i++) {
    let [x, y] = input[index + i + 1].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  // 방문여부 판단 -> 미방문: -1, 빨강: 0, 파랑: 1
  let visited = Array(v + 1).fill(-1);

  for (let i = 1; i <= v; i++) {
    if (visited[i] === -1) bfs(i, graph, visited);
  }

  if (isBipartite(graph, visited)) console.log("YES");
  else console.log("NO");

  index += e + 1;
  testCase--;
}