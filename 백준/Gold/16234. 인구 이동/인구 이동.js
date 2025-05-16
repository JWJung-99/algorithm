let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, L, R] = input[0].split(" ").map(Number);
let graph = [];

for (let i = 0; i < N; i++) {
  graph.push(input[i + 1].split(" ").map(Number));
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const BFS = (x, y, visited) => {
  let merged = [[x, y]];
  visited[x][y] = true;
  let sum = graph[x][y];

  let queue = [];
  queue.push([x, y]);

  while (queue.length > 0) {
    let [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nextX = curX + dx[i];
      let nextY = curY + dy[i];

      if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;
      
      if (!visited[nextX][nextY]) {
        const diff = Math.abs(graph[nextX][nextY] - graph[curX][curY]);

        if (diff >= L && diff <= R) {
          queue.push([nextX, nextY]);
          merged.push([nextX, nextY]);
          visited[nextX][nextY] = true;
          sum += graph[nextX][nextY];
        }
      }
    }
  }

  const avg = parseInt(sum / merged.length);

  for (let country of merged) {
    let [x, y] = country;
    graph[x][y] = avg;
  }
};

let day = 0;

while (true) {
  let visited = Array.from(Array(N), () => Array(N).fill(false));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        BFS(i, j, visited);
        count++;
      }
    }
  }

  // 모든 국가에 대해 한 번씩 BFS 시행 => 연합할 국가가 없음
  if (count === N * N) break;

  day += 1;
}

console.log(day);
