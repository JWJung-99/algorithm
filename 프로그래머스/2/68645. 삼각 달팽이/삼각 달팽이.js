function solution(n) {
	let answer = [];
	let table = Array.from({ length: n }, () => Array(n).fill(0));
	let directions = [
		[1, 0],
		[0, 1],
		[-1, -1],
	];
	let index = 0;
	let curX = -1;
	let curY = 0;
	let curValue = 1;

	for (let i = n; i > 0; i--) {
		let [dx, dy] = directions[index];

		for (let j = 0; j < i; j++) {
			curX += dx;
			curY += dy;

			table[curX][curY] = curValue;
			curValue++;
		}

		index = (index + 1) % 3;
	}

	for (let arr of table) {
		answer.push(...arr.filter((x) => x !== 0));
	}

	return answer;
}