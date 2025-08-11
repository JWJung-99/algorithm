import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(arr) {
	let selected = [];
	let visited = Array(arr.length).fill(false);

	function DFS(depth) {
		if (depth === 2) {
			let sum = selected.reduce((acc, cur) => acc + arr[cur], 0);
			if (sum === 40) return true;
			return false;
		} else {
			for (let i = 0; i < arr.length; i++) {
				if (visited[i]) continue;
				visited[i] = true;
				selected.push(i);
				if (DFS(depth + 1)) return true;
				selected.pop();
				visited[i] = false;
			}
		}
	}

	DFS(0);

	return arr.filter((_, index) => !selected.includes(index)).join(' ');
}

for (let i = 1; i <= testCase; i++) {
	const heights = input[i].split(' ').map(Number);
	console.log(solution(heights));
}
