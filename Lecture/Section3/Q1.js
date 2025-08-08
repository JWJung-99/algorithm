import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(word) {
	let answer = 'YES';

	// 방법 1
	// for (let i = 0; i < parseInt(word.length / 2); i++) {
	// 	if (word[i] !== word[word.length - i - 1]) answer = 'NO';
	// }

	// 방법 2
	if (word.reverse().join('') !== word.join('')) answer = 'NO';

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	let word = input[i].toLowerCase().split('');
	console.log(solution(word));
}
