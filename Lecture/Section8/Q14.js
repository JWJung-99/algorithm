import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} n
 * @param {number} m
 * @returns {string}
 */
function solution(n, m) {
	let answer = '';
	let selected = [];
	let cnt = 0;

	function DFS(depth, s) {
		if (depth === m) {
			answer += selected.join(' ') + '\n';
			cnt++;
		} else {
			for (let i = s; i <= n; i++) {
				selected.push(i);
				DFS(depth + 1, i + 1);
				selected.pop();
			}
		}
	}

	DFS(0, 1);

	return answer + cnt;
}

let index = 1;
while (testCase > 0) {
	const [N, M] = input[index].split(' ').map(Number);
	console.log(solution(N, M));

	testCase--;
	index += 1;
}
