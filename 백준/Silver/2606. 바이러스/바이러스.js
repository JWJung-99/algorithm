let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const links = Number(input[1]);
const graph = new Array(n + 1).fill([]);
let visited = new Array(n + 1).fill(false);
let answer = 0;

for (let i = 0; i < links; i++) {
  const [start, end] = input[i + 2].split(" ").map(Number);

  graph[start] = [...graph[start], end];
  graph[end] = [...graph[end], start];
}

const dfs = (graph, v, visited) => {
  visited[v] = true;
  answer++;

  for (let x of graph[v]) {
    if (!visited[x]) dfs(graph, x, visited);
  }
};

dfs(graph, 1, visited);
console.log(answer - 1);