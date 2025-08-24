import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(N) {
	let answer = [];
	// let visited = Array.from({ length: N + 1 }).fill(false);

	// function DFS(v) {
	// 	if (v > N) {
	// 		let tmp = '';
	// 		for (let i = 1; i <= N; i++) {
	// 			if (visited[i]) tmp += i + ' ';
	// 		}
	// 		if (tmp.length > 0) answer.push(tmp.trim());

	// 		return;
	// 	} else {
	// 		visited[v] = true;
	// 		DFS(v + 1);
	// 		visited[v] = false;
	// 		DFS(v + 1);
	// 	}
	// }

	let selected = [];

	function DFS(n) {
		if (n > N) {
			if (selected.length) answer.push(selected.join(' '));
		} else {
			selected.push(n);
			DFS(n + 1);
			selected.pop();
			DFS(n + 1);
		}
	}

	DFS(1);

	return answer.join('\n');
}

let index = 1;
while (testCase > 0) {
	const N = Number(input[index]);
	console.log(solution(N));

	testCase--;
	index += 1;
}
