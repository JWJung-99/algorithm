import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution1(n, m) {
	let answer = '';
	let cnt = 0;
	let selected = [];

	function DFS(depth) {
		if (depth === m) {
			answer += selected.join(' ') + '\n';
			cnt++;
			return;
		} else {
			for (let i = 1; i <= n; i++) {
				selected.push(i);
				DFS(depth + 1);
				selected.pop();
			}
		}
	}

	DFS(0);

	return answer + cnt;
}

function solution2(n, m) {
	let answer = '';
	let selected = [];
	let tmp = Array.from({ length: m }, () => 0);

	function DFS(depth) {
		if (depth === m) {
			selected.push([...tmp]);
		} else {
			for (let i = 1; i <= n; i++) {
				tmp[depth] = i;
				DFS(depth + 1);
			}
		}
	}

	DFS(0);

	for (let x of selected) {
		answer += x.join(' ') + '\n';
	}

	return answer + selected.length;
}

let index = 1;
while (testCase > 0) {
	const [N, M] = input[index].split(' ').map(Number);
	console.log(solution1(N, M));
	console.log(solution2(N, M));

	testCase--;
	index += 1;
}
