let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [R, C] = input[0].split(" ").map(Number);
const board = [];
for (let i = 1; i <= R; i++) {
  board.push(input[i].split(""));
}
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let visited = new Set();
let max = 0;

function dfs(depth, x, y) {
  max = Math.max(max, depth);

  for (let i = 0; i < 4; i++) {
    let nextX = x + dx[i];
    let nextY = y + dy[i];

    if (nextX < 0 || nextY < 0 || nextX >= R || nextY >= C) continue;
    if (visited.has(board[nextX][nextY])) continue;

    visited.add(board[nextX][nextY]);
    dfs(depth + 1, nextX, nextY);
    visited.delete(board[nextX][nextY]);
  }
}

visited.add(board[0][0]);
dfs(1, 0, 0);
console.log(max);