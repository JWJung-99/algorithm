/*
[문제]
N이 주어졌을 때, 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하는 프로그램을 작성하시오.

[입력]
첫째 줄에 N(1 ≤ N ≤ 8)이 주어진다.

[출력]
첫째 줄부터 N!개의 줄에 걸쳐서 모든 순열을 사전순으로 출력한다.
*/

import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];

let answer = "";

function possible(x) {
  for (let n of arr) {
    if (x === n) return false;
  }

  return true;
}

function dfs(depth) {
  if (depth === n) {
    answer += arr.join(" ") + "\n";
  }

  for (let i = 1; i <= n; i++) {
    if (!possible(i)) continue;

    arr.push(i);
    dfs(depth + 1);
    arr.pop();
  }
}

dfs(0);
console.log(answer);
