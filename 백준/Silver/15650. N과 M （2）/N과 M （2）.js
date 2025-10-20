let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let visited = Array(N + 1).fill(false);
let selected = [];
let answer = [];

function DFS(n, cur) {
	if (n === M) {
		answer.push(selected.join(' '));
	} else {
		for (let i = cur + 1; i <= N; i++) {
			if (visited[i]) continue;

			visited[i] = true;
			selected.push(i);
			DFS(n + 1, i);
			selected.pop();
			visited[i] = false;
		}
	}
}

DFS(0, 0);
console.log(answer.join('\n'));