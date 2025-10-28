function solution(numbers, target) {
	const N = numbers.length;

	let answer = 0;
	let selected = [];
	function DFS(n) {
		if (n === N) {
			let expression = '';
			for (let i = 0; i < N; i++) {
				expression += selected[i] + numbers[i];
			}
			if (eval(expression) === target) answer++;
		} else {
			for (let oper of ['+', '-']) {
				selected.push(oper);
				DFS(n + 1);
				selected.pop();
			}
		}
	}

	DFS(0);

	return answer;
}