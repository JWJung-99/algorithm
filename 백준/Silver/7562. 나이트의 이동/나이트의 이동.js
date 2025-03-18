let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);
let index = 1;

function bfs(size, visited, [curX, curY], [tarX, tarY]) {
  let queue = [];
  queue.push([curX, curY]);

  while (queue.length > 0) {
    let [x, y] = queue.shift();
    if (x === tarX && y === tarY) return visited[x][y];

    for (let [nextX, nextY] of [
      [x + 1, y + 2],
      [x + 2, y + 1],
      [x + 1, y - 2],
      [x + 2, y - 1],
      [x - 1, y + 2],
      [x - 2, y + 1],
      [x - 1, y - 2],
      [x - 2, y - 1],
    ]) {
      if (nextX < 0 || nextX >= size || nextY < 0 || nextY >= size) continue;

      if (visited[nextX][nextY] === 0) {
        visited[nextX][nextY] = visited[x][y] + 1;
        queue.push([nextX, nextY]);
      }
    }
  }
}

while (testCase > 0) {
  let size = Number(input[index]);
  let current = input[index + 1].split(" ").map(Number);
  let target = input[index + 2].split(" ").map(Number);
  let visited = Array.from(Array(size), () => Array(size).fill(0));

  console.log(bfs(size, visited, current, target));

  index += 3;
  testCase--;
}