/*
[문제 설명]
N개의 노드로 이루어진 트리가 주어지고 M개의 두 노드 쌍을 입력받을 때 두 노드 사이의 거리를 출력하라.

[입력]
첫째 줄에 노드의 개수 N과 거리를 알고 싶은 노드 쌍의 개수 M이 입력되고 다음 N-1개의 줄에 트리 상에 연결된 두 점과 거리를 입력받는다. 그 다음 줄에는 거리를 알고 싶은 M개의 노드 쌍이 한 줄에 한 쌍씩 입력된다.

[출력]
M개의 줄에 차례대로 입력받은 두 노드 사이의 거리를 출력한다.

[제한사항]
- 2≤N≤1,000 
- 1≤M≤1,000
- 트리 상에 연결된 두 점과 거리는 10,000 이하인 자연수이다.
- 트리 노드의 번호는 1부터 N까지 자연수이며, 두 노드가 같은 번호를 갖는 경우는 없다.
*/

import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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
