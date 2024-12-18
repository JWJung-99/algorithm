let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = [0];
let visited = new Array(n + 1).fill(false);
let finished = new Array(n + 1).fill(false);
let result = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

function dfs(arr, start) {
  visited[start] = true;
  let y = arr[start];

  if (!visited[y]) dfs(arr, y);
  else if (!finished[y]) {
    for (let i = y; i !== start; i = arr[i]) {
      result.push(i);
    }

    result.push(start);
  }

  finished[start] = true;
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) dfs(arr, i);
}

console.log(result.length + "\n" + result.sort((a, b) => a - b).join("\n"));