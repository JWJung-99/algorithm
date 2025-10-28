let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let K = Number(input[1]);

let board = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

// 사과 위치 저장
for (let i = 2; i <= K + 1; i++) {
	let [x, y] = input[i].split(' ').map(Number);
	board[x][y] = 1;
}

// 방향 변환 정보 저장
let L = Number(input[K + 2]);
let info = [];
for (let i = K + 3; i <= K + L + 2; i++) {
	let [x, c] = input[i].split(' ');
	info.push([Number(x), c]);
}

// 처음에 오른쪽을 향하므로 동<->남<->서<->북
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

function makeTurn(direction, C) {
	if (C === 'D') direction = (direction + 1) % 4;
	else {
		direction = direction - 1;
		if (direction === -1) direction = 3;
	}

	return direction;
}

// 뱀이 [1, 1]에서 출발
let [X, Y] = [1, 1];
board[X][Y] = 2;
let direction = 0;
let time = 0;
let index = 0;

// 뱀의 머리이자 꼬리
let queue = [[X, Y]];
while (true) {
	let nextX = X + dx[direction];
	let nextY = Y + dy[direction];

	if (
		1 <= nextX &&
		nextX <= N &&
		1 <= nextY &&
		nextY <= N &&
		board[nextX][nextY] !== 2
	) {
		// 사과가 있다면
		if (board[nextX][nextY] === 1) {
			queue.push([nextX, nextY]);
			board[nextX][nextY] = 2;
		}

		// 사과가 없다면
		if (board[nextX][nextY] === 0) {
			queue.push([nextX, nextY]);
			board[nextX][nextY] = 2;
			let [tailX, tailY] = queue.shift();
			board[tailX][tailY] = 0;
		}
	} else {
		time += 1;
		break;
	}

	[X, Y] = [nextX, nextY];
	time += 1;

	if (index < L && time === info[index][0]) {
		direction = makeTurn(direction, info[index][1]);
		index += 1;
	}
}

console.log(time);