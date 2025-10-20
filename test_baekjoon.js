import fs from 'fs';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let visited = Array(N + 1).fill(false);
let selected = [];
let answer = [];

function DFS(n) {
	if (n === M) {
		answer.push(selected.join(' '));
	} else {
		for (let i = 1; i <= N; i++) {
			if (visited[i]) continue;

			visited[i] = true;
			selected.push(i);
			DFS(n + 1);
			selected.pop();
			visited[i] = false;
		}
	}
}

DFS(0);

console.log(answer.join('\n'));
