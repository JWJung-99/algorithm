let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);

let map = [];
for (let i = 1; i <= N; i++) {
	map.push(input[i].split(''));
}

let heights = [];
for (let i = N + 1; i <= N * 2; i++) {
	heights.push(input[i].split(' ').map(Number));
}

let fatigue = new Set();
let houses = 0;
let startX = 0;
let startY = 0;

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		fatigue.add(heights[i][j]);

		if (map[i][j] === 'P') {
			startX = i;
			startY = j;
		}

		if (map[i][j] === 'K') houses += 1;
	}
}

fatigue = [...fatigue].sort((a, b) => a - b);

let dx = [-1, 0, 1, 0, -1, -1, 1, 1];
let dy = [0, -1, 0, 1, 1, -1, 1, -1];

function BFS(x, y, left, right) {
	let cnt = 0;
	let queue = [];
	let visited = Array.from({ length: N }, () => Array(N).fill(false));
	visited[x][y] = true;
	queue.push([x, y]);

	while (queue.length) {
		let [curX, curY] = queue.shift();
		if (map[curX][curY] === 'K') cnt += 1;

		for (let i = 0; i < 8; i++) {
			let nextX = curX + dx[i];
			let nextY = curY + dy[i];

			if (
				nextX < 0 ||
				nextX >= N ||
				nextY < 0 ||
				nextY >= N ||
				visited[nextX][nextY]
			)
				continue;

			if (
				fatigue[left] <= heights[nextX][nextY] &&
				heights[nextX][nextY] <= fatigue[right]
			) {
				visited[nextX][nextY] = true;
				queue.push([nextX, nextY]);
			}
		}
	}

	return cnt;
}

let left = 0;
let right = 0;
let start = 0;

for (let i = 0; i < fatigue.length; i++) {
	if (fatigue[i] === heights[startX][startY]) {
		right = i;
		start = i;
	}
}

let answer = 1e9;

while (true) {
	let cnt = 0;
	while (true) {
		cnt = BFS(startX, startY, left, right);
		if (right < fatigue.length - 1 && cnt < houses) right += 1;
		else break;
	}

	if (cnt === houses) {
		answer = Math.min(answer, fatigue[right] - fatigue[left]);
	}

	left += 1;

	if (left > start || right > fatigue.length - 1) break;
}

console.log(answer);