let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);

let houses = [];
let chickens = [];

for (let i = 1; i <= n; i++) {
  let r = input[i].split(" ").map(Number);

  for (let j = 0; j < n; j++) {
    if (r[j] === 1) houses.push([i, j + 1]);
    if (r[j] === 2) chickens.push([i, j + 1]);
  }
}

let visited = new Array(chickens.length).fill(false);
let selected = [];
let answer = 1e9;

function dfs(depth, start) {
  if (depth === m) {
    let result = [];
    for (let i of selected) result.push(chickens[i]);

    let sum = 0;

    for (let [hx, hy] of houses) {
      let temp = 1e9;

      for (let [cx, cy] of result) {
        temp = Math.min(temp, Math.abs(cx - hx) + Math.abs(cy - hy));
      }

      sum += temp;
    }

    answer = Math.min(answer, sum);

    return;
  }

  for (let i = start; i < chickens.length; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    selected.push(i);
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(answer);