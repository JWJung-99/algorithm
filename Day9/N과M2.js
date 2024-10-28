/*
[문제]
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
고른 수열은 오름차순이어야 한다.

[입력]
첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

[출력]
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

수열은 사전 순으로 증가하는 순서로 출력해야 한다.
*/

import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);

let arr = new Array(n).fill(0).map((item, index) => (item = index + 1));
let visited = new Array(n).fill(false);
let selected = [];
let answer = "";

function dfs(array, depth, start) {
  if (depth === m) {
    let result = [];
    for (let x of selected) result.push(array[x]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    selected.push(i);
    dfs(array, depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0, 0);
console.log(answer);
