let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);

let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split("").map(Number));
}

function dfs(x, y) {
  // 범위를 벗어남
  if (x <= -1 || x >= n || y <= -1 || y >= n) return 0;

  // 집이 있다면
  if (graph[x][y] === 1) {
    // 해당 위치 방문 처리
    graph[x][y] = -1;
    let result = 1;

    result += dfs(x - 1, y);
    result += dfs(x + 1, y);
    result += dfs(x, y - 1);
    result += dfs(x, y + 1);

    return result;
  }

  return 0;
}

let answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let current = dfs(i, j);
    if (current > 0) answer.push(current);
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length + "\n" + answer.join("\n"));