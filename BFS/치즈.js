import fs from "fs";
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let graph = [];

for (let i = 0; i < N; i++) {
  graph.push(input[i + 1].split(" ").map(Number));
}

const BFS = () => {
  let visited = Array.from(Array(N), () => new Array(M).fill(false));

  let queue = [];
  queue.push([0, 0]);
  visited[0][0] = true;

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  while (queue.length > 0) {
    let [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nextX = curX + dx[i];
      let nextY = curY + dy[i];

      if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= M) continue;

      if (visited[nextX][nextY]) continue;

      if (graph[nextX][nextY] >= 1) {
        graph[nextX][nextY] += 1;
      } else {
        queue.push([nextX, nextY]);
        visited[nextX][nextY] = true;
      }
    }
  }
};

const melt = () => {
  let isFinished = true;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] >= 3) {
        graph[i][j] = 0;
        isFinished = false;
      } else if (graph[i][j] === 2) {
        graph[i][j] = 1;
      }
    }
  }

  return isFinished;
};

let result = 0;
while (true) {
  BFS();

  if (melt()) {
    console.log(result);
    break;
  } else {
    result += 1;
  }
}
