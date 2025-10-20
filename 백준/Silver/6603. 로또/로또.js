let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let line = 0;

while (input[line][0] !== '0') {
	let [K, ...numbers] = input[line].split(' ').map(Number);
	let visited = Array(K).fill(false);
	let selected = [];
	let answer = [];

	function DFS(n, cur) {
		if (n === 6) {
			answer.push(selected.join(' '));
		} else {
			for (let i = cur; i < K; i++) {
				if (visited[i]) continue;

				visited[i] = true;
				selected.push(numbers[i]);
				DFS(n + 1, i);
				selected.pop();
				visited[i] = false;
			}
		}
	}

	DFS(0, 0);

	console.log(answer.join('\n'));
	console.log();

	line++;
}