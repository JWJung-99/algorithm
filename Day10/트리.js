/*
[문제 설명]
그래프는 정점과 간선으로 이루어져 있다. 두 정점 사이에 경로가 있다면, 두 정점은 연결되어 있다고 한다. 연결 요소는 모든 정점이 서로 연결되어 있는 정점의 부분집합이다. 그래프는 하나 또는 그 이상의 연결 요소로 이루어져 있다.

트리는 사이클이 없는 연결 요소이다. 트리에는 여러 성질이 있다. 예를 들어, 트리는 정점이 n개, 간선이 n-1개 있다. 또, 임의의 두 정점에 대해서 경로가 유일하다.

그래프가 주어졌을 때, 트리의 개수를 세는 프로그램을 작성하시오.

[입력]
입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스의 첫째 줄에는 n ≤ 500과 m ≤ n(n-1)/2을 만족하는 정점의 개수 n과 간선의 개수 m이 주어진다. 다음 m개의 줄에는 간선을 나타내는 두 개의 정수가 주어진다. 같은 간선은 여러 번 주어지지 않는다. 정점은 1번부터 n번까지 번호가 매겨져 있다. 입력의 마지막 줄에는 0이 두 개 주어진다.

[출력]
입력으로 주어진 그래프에 트리가 없다면 "No trees."를, 한 개라면 "There is one tree."를, T개(T > 1)라면 "A forest of T trees."를 테스트 케이스 번호와 함께 출력한다.
*/

import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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
