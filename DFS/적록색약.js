import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let N = Number(input[0]);
let artwork = Array.from(Array(N), () => []);
let visited = Array.from(Array(N), () => Array(N).fill(false));

for (let i = 1; i <= N; i++) {
  artwork[i - 1] = input[i].split("");
}

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

let rgSection = 0;
let section = 0;

function dfs(x, y) {
  if (!visited[x][y]) {
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];

      if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;

      if (artwork[x][y] === artwork[nextX][nextY]) dfs(nextX, nextY);
    }
  }
}

// 적록색약이 아닌 사람
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      section++;
      dfs(i, j);
    }
  }
}

// 적록색약인 사람
visited = Array.from(Array(N), () => Array(N).fill(false));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (artwork[i][j] === "R") {
      artwork[i][j] = "G";
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      rgSection++;
      dfs(i, j);
    }
  }
}

console.log(section, rgSection);
