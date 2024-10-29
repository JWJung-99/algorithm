/*
[문제]
세로 R칸, 가로 C칸으로 된 표 모양의 보드가 있다. 보드의 각 칸에는 대문자 알파벳이 하나씩 적혀 있고, 좌측 상단 칸 (1행 1열) 에는 말이 놓여 있다.

말은 상하좌우로 인접한 네 칸 중의 한 칸으로 이동할 수 있는데, 새로 이동한 칸에 적혀 있는 알파벳은 지금까지 지나온 모든 칸에 적혀 있는 알파벳과는 달라야 한다. 즉, 같은 알파벳이 적힌 칸을 두 번 지날 수 없다.

좌측 상단에서 시작해서, 말이 최대한 몇 칸을 지날 수 있는지를 구하는 프로그램을 작성하시오. 말이 지나는 칸은 좌측 상단의 칸도 포함된다.

[입력]
첫째 줄에 R과 C가 빈칸을 사이에 두고 주어진다. (1 ≤ R,C ≤ 20) 둘째 줄부터 R개의 줄에 걸쳐서 보드에 적혀 있는 C개의 대문자 알파벳들이 빈칸 없이 주어진다.

[출력]
첫째 줄에 퀸 N개를 서로 공격할 수 없게 놓는 경우의 수를 출력한다.
*/

import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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
