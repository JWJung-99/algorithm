/*
[문제]
N-Queen 문제는 크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제이다.

N이 주어졌을 때, 퀸을 놓는 방법의 수를 구하는 프로그램을 작성하시오.

[입력]
첫째 줄에 N이 주어진다. (1 ≤ N < 15)

[출력]
첫째 줄에 퀸 N개를 서로 공격할 수 없게 놓는 경우의 수를 출력한다.
*/

import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let queens = [];

function possible(x, y) {
  for (let [a, b] of queens) {
    if (a === x || b === y) return false;
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }

  return true;
}

let cnt = 0;

function dfs(row) {
  if (row === n) cnt += 1;

  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;

    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);
console.log(cnt);
