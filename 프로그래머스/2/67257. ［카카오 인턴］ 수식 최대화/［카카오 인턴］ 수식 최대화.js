function calculator(oper, a, b) {
	if (oper === '+') return a + b;
	else if (oper === '-') return a - b;
	else return a * b;
}

function solution(expression) {
	let answer = 0;

	// 연산자 우선순위 조합
	let priorities = [
		['+', '-', '*'],
		['+', '*', '-'],
		['-', '+', '*'],
		['-', '*', '+'],
		['*', '+', '-'],
		['*', '-', '+'],
	];

	for (let priority of priorities) {
        // 숫자와 연산자 각각 배열에 저장
		const numbers = expression.split(/[-*+]/g).map(Number);
		const operators = expression.match(/[-*+]/g);

		for (let oper of priority) {
            // 같은 연산자가 있다면 앞에 있는 연산자부터
			let index = operators.indexOf(oper);
            
			while (index !== -1) {
				numbers[index] = calculator(oper, numbers[index], numbers[index + 1]);
                // 계산한 숫자와 연산자 제거
				numbers.splice(index + 1, 1);
				operators.splice(index, 1);
                // 같은 연산자가 있는지 확인
                // -> 있다면 해당 연산자 위치에서 계산
                // -> 없다면 index === -1 => 반복문 종료
				index = operators.indexOf(oper);
			}
		}

		answer = Math.max(answer, Math.abs(numbers[0]));
	}

	return answer;
}