import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력
 * @param {number} m
 * @param {number[]} arr
 * @returns {string}
 */
function solution(m, arr) {
	let result = [];
	let tmp = Array.from({ length: m }, () => 0);
	let visited = Array.from({ length: arr.length }).fill(false);

	function DFS(depth) {
		if (depth === m) {
			result.push([...tmp]);
			return;
		} else {
			for (let i = 0; i < arr.length; i++) {
				if (visited[i]) continue;

				visited[i] = true;
				tmp[depth] = arr[i];
				DFS(depth + 1);
				visited[i] = false;
			}
		}
	}

	DFS(0);

	let answer = '';

	result.forEach((item) => {
		answer += item.join(' ') + '\n';
	});

	answer += result.length;

	return answer;
}

let index = 1;
while (testCase > 0) {
	const [N, M] = input[index].split(' ').map(Number);
	const nums = input[index + 1].split(' ').map(Number);
	console.log(solution(M, nums));

	testCase--;
	index += 2;
}
