let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let selected = [];
let answer = [];

function DFS(n) {
	if (n === M) {
		answer.push(selected.join(' '));
	} else {
		for (let i = 1; i <= N; i++) {
			selected.push(i);
			DFS(n + 1);
			selected.pop();
		}
	}
}

DFS(0);
console.log(answer.join('\n'));