import fs from 'fs';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const dirs = input[0];

function solution1(dirs) {
	let answer = 0;

	let direction = {
		U: [0, 1],
		D: [0, -1],
		R: [1, 0],
		L: [-1, 0],
	};

	let visited = Array.from({ length: 11 }, () =>
		Array.from({ length: 11 }, () => {
			return {
				U: false,
				D: false,
				R: false,
				L: false,
			};
		})
	);

	let [curX, curY] = [5, 5];

	for (let dir of dirs) {
		let [nextX, nextY] = [curX + direction[dir][0], curY + direction[dir][1]];

		if (nextX < 0 || nextX >= 11 || nextY < 0 || nextY >= 11) continue;

		if (!visited[curX][curY][dir]) {
			answer++;
			visited[curX][curY][dir] = true;
		}

		curX = nextX;
		curY = nextY;
	}

	return answer;
}

console.log(solution1(dirs));
