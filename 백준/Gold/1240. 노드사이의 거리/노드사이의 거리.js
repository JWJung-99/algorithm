let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
let graph = new Array(n + 1);

for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 1; i < n; i++) {
  const [from, to, dist] = input[i].split(" ").map(Number);

  graph[from].push([to, dist]);
  graph[to].push([from, dist]);
}

const dfs = (graph, start, visited, distance, current) => {
  if (visited[start]) return;

  distance[start] = current;
  visited[start] = true;

  for (let [node, dist] of graph[start]) {
    dfs(graph, node, visited, distance, current + dist);
  }
};

for (let i = 0; i < m; i++) {
  const [from, to] = input[n + i].split(" ").map(Number);
  let visited = new Array(n + 1).fill(false);
  let distance = new Array(n + 1).fill(0);
  dfs(graph, from, visited, distance, 0);
  console.log(distance[to]);
}