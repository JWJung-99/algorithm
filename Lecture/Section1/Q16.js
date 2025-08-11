import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(arr) {
	// 방법 1
	// let answer = [];
	// for (let char of arr) {
	// 	if (!answer.includes(char)) answer.push(char);
	// }

	// 방법 2
	let answer = arr.filter((word, index) => arr.indexOf(word) === index);

	return answer.join('');
}

for (let i = 1; i <= testCase; i++) {
	const arr = input[i].split('');
	console.log(solution(arr));
}
