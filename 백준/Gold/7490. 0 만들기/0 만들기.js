let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);
let index = 1;

function calculate(N, ops) {
	const numbers = Array.from({ length: N }, (_, i) => i + 1);

	let expression = numbers[0];
	for (let i = 0; i < ops.length; i++) {
		expression += ops[i] + numbers[i + 1];
	}

	const joined = expression.replace(/ /g, '');
	const result = eval(joined);

	return { expression, result };
}

while (testCase > 0) {
	let N = Number(input[index]);
	let selected = [];
	let answer = '';

	function DFS(n) {
		if (n === N) {
			const { expression, result } = calculate(N, selected);
			if (result === 0) answer += expression + '\n';
			return;
		} else {
			for (let oper of [' ', '+', '-']) {
				selected.push(oper);
				DFS(n + 1);
				selected.pop();
			}
		}
	}

	DFS(1);

	console.log(answer);

	index++;
	testCase--;
}