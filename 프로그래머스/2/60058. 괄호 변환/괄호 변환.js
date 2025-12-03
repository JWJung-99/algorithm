// 더 이상 분리할 수 없는 균형잡힌 괄호 문자열 u와 나머지 v를 찾는 함수: O(n)
function splitBalanced(str) {
	let [u, v] = ['', ''];

	let open = str[0] === '(' ? 1 : 0;
	let close = str[0] === ')' ? 1 : 0;

	for (let i = 1; i < str.length; i++) {
		if (str[i] === '(') open++;
		else close++;

		if (open === close) {
			[u, v] = [str.slice(0, i + 1), str.slice(i + 1)];
			break;
		}
	}

	return [u, v];
}

// 올바른 괄호 문자열인지 판별하는 함수: O(n)
function isRight(str) {
	let stack = [];

	for (let char of str) {
		if (char === '(') stack.push(char);
		else {
			if (stack.at(-1) === '(') stack.pop();
			else return false;
		}
	}

	return true;
}

// 문자열의 괄호 방향을 뒤집는 함수: O(n)
function reverseParenthesis(str) {
	let result = [];
	for (let char of str) {
		if (char === '(') result.push(')');
		else result.push('(');
	}
	return result.join('');
}

// 올바른 괄호 문자열로 변환하는 함수: O(n)
function convertToRight(str) {
	// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
	if (str === '') return '';

	// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
	let [u, v] = splitBalanced(str);
	let answer = '';

	// 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
	if (isRight(u)) {
		// 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
		answer += u + convertToRight(v);
	}
	// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
	else {
		// 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
		// 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
		// 4-3. ')'를 다시 붙입니다.
		// 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
		answer +=
			'(' + convertToRight(v) + ')' + reverseParenthesis(u.slice(1, -1));
	}

	// 4-5. 생성된 문자열을 반환합니다.
	return answer;
}

function solution(p) {
	// 0. 입력이 이미 "올바른 괄호 문자열"이라면 그대로 return 합니다.
	if (isRight(p)) return p;
	else return convertToRight(p);
}