let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function hasCycle(graph, node, prev, visited) {
  visited[node] = true;

  for (let neighbor of graph[node]) {
    if (!visited[neighbor]) {
      if (hasCycle(graph, neighbor, node, visited)) return true;
    } else if (neighbor !== prev) {
      return true;
    }
  }

  return false;
}

let line = 0;
let testCase = 1;

while (1) {
  let [n, m] = input[line].split(" ").map(Number);

  if (n === 0 && m === 0) break;

  let visited = new Array(n + 1).fill(false);
  let graph = [];

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < m; i++) {
    let [x, y] = input[line + 1 + i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }

  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i] && !hasCycle(graph, i, 0, visited)) {
      count++;
    }
  }

  if (count > 1) {
    console.log(`Case ${testCase}: A forest of ${count} trees.`);
  } else if (count === 1) {
    console.log(`Case ${testCase}: There is one tree.`);
  } else {
    console.log(`Case ${testCase}: No trees.`);
  }

  line += m + 1;
  testCase++;
}