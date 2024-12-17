let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);
let i = 1;

while (testCase > 0) {
  let n = Number(input[i]);
  let students = [0, ...input[i + 1].split(" ").map(Number)];
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let member = 0;

  // 방문처리, 완료처리 모두 진행
  function dfs(arr, start) {
    visited[start] = true;
    let next = arr[start];

    // 방문하지 않은 경우 연결된 노드 dfs
    if (!visited[next]) dfs(arr, next);
    // 방문은 했는데 완료처리가 안 된 경우 => 사이클!
    else if (!finished[next]) {
      for (let i = next; i !== start; i = arr[i]) {
        member++;
      }

      member++;
    }
    // 현재 노드 완료처리
    finished[start] = true;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(students, i);
  }

  console.log(n - member);

  i += 2;
  testCase--;
}