function calculator(oper, a, b) {
	if (oper === '+') return a + b;
	else if (oper === '-') return a - b;
	else return a * b;
}

function solution(expression) {
	// 연산자 조합
	let priorities = [
		['+', '-', '*'],
		['+', '*', '-'],
		['-', '+', '*'],
		['-', '*', '+'],
		['*', '+', '-'],
		['*', '-', '+'],
	];

	const numbers = expression.split(/[+-*]/g);
	const operators = expression.match(/[+-*]/g);

	console.log(numbers, operators);
}

// console.log(solution());
console.log(solution('100-200*300-500+20'));
console.log(solution('50*6-3*2'));
