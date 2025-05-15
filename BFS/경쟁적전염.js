import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
let graph = [];
let data = [];

for (let i = 0; i < N; i++) {
  graph.push(input[i + 1].split(" ").map(Number));

  for (let j = 0; j < N; j++) {
    if (graph[i][j] != 0) {
      // [바이러스 종류, 현재 시간, x 위치, y 위치]
      data.push([graph[i][j], 0, i, j]);
    }
  }
}

const [S, X, Y] = input[N + 1].split(" ").map(Number);

// 바이러스 번호가 작은 순서부터 queue에 삽입
data.sort((a, b) => a[0] - b[0]);

let queue = [];
for (let item of data) {
  queue.push(item);
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

while (queue.length > 0) {
  let [virus, s, x, y] = queue.shift();

  if (s === S) break;

  for (let i = 0; i < 4; i++) {
    let nextX = x + dx[i];
    let nextY = y + dy[i];

    if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;

    if (graph[nextX][nextY] === 0) {
      graph[nextX][nextY] = virus;
      queue.push([virus, s + 1, nextX, nextY]);
    }
  }
}

console.log(graph[X - 1][Y - 1]);
