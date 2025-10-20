let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let tastes = [];
for (let i = 1; i <= N; i++) {
	tastes.push(input[i].split(' ').map(Number));
}

let selected = [];
let answer = 1e9;

function DFS(n) {
	if (n === N) {
		// 물은 요리라고 할 수 없기 때문에 아무 재료도 선택하지 않은 경우 return
		if (!selected.length) return;

		let S = 1;
		let B = 0;
		for (let x of selected) {
			S *= tastes[x][0];
			B += tastes[x][1];
		}
		let diff = Math.abs(S - B);
		answer = Math.min(answer, diff);
	} else {
		// 재료 선택
		selected.push(n);
		DFS(n + 1);
		selected.pop();

		// 재료 미선택
		DFS(n + 1);
	}
}

DFS(0);
console.log(answer);