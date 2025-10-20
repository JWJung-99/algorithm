let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const A = input[1].split(" ");
let visited = new Array(10).fill(false);
let selected = [];
let current = "";
let first = "";

function dfs(depth) {
  if (depth === n + 1) {
    let check = true;

    for (let i = 0; i < n; i++) {
      if (A[i] === ">") {
        if (selected[i] < selected[i + 1]) check = false;
      } else if (A[i] === "<") {
        if (selected[i] > selected[i + 1]) check = false;
      }
    }

    if (check) {
      current = "";
      for (let x of selected) current += x;
      if (first === "") first = current;
    }

    return;
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0);

console.log(current + "\n" + first);