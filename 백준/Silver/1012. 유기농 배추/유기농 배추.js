let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);
let line = 1;

function dfs(graph, m, n, x, y) {
  if (x <= -1 || x >= m || y <= -1 || y >= n) return false;

  if (graph[x][y] === 1) {
    // 해당 노드 방문 처리
    graph[x][y] = -1;

    // 상, 하, 좌, 우 dfs 호출
    dfs(graph, m, n, x - 1, y);
    dfs(graph, m, n, x + 1, y);
    dfs(graph, m, n, x, y - 1);
    dfs(graph, m, n, x, y + 1);

    return true;
  }

  return false;
}

while (T > 0) {
  const [m, n, k] = input[line].split(" ").map(Number);

  let graph = [];
  for (let i = 0; i < m; i++) {
    graph[i] = new Array(n);
  }

  for (let i = 1; i <= k; i++) {
    let [x, y] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1;
  }

  let answer = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(graph, m, n, i, j)) answer++;
    }
  }
  console.log(answer);

  line += k + 1;
  T--;
}
