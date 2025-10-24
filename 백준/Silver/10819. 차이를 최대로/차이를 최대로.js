let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let numbers = input[1].split(' ').map(Number);

let visited = Array(N).fill(false);
let selected = [];
let answer = 0;

function DFS(n) {
	if (n === N) {
		let sum = 0;
		for (let i = 0; i < N - 1; i++) {
			sum += Math.abs(selected[i] - selected[i + 1]);
		}
		answer = Math.max(answer, sum);
	} else {
		for (let i = 0; i < N; i++) {
			if (visited[i]) continue;

			visited[i] = true;
			selected.push(numbers[i]);
			DFS(n + 1);
			selected.pop();
			visited[i] = false;
		}
	}
}

DFS(0);
console.log(answer);