import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(n, arr) {
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];

	let answer = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			// 봉우리가 아님이 확실하면 pass
			if (arr[i][j] === 0) continue;

			// 봉우리라고 가정
			let isPeak = true;

			// 정말 봉우리인지 확인
			for (let k = 0; k < 4; k++) {
				let nx = i + dx[k];
				let ny = j + dy[k];
				if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

				if (arr[i][j] <= arr[nx][ny]) {
					isPeak = false;
					break;
				}
			}

			// 주변 지역 확인 후 봉우리라면 개수++
			if (isPeak) answer++;
		}
	}

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	const n = Number(input[i]);
	const graph = [];

	for (let j = i + 1; j <= i + n; j++) {
		graph.push(input[j].split(' ').map(Number));
	}

	console.log(solution(n, graph));
}
