import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(str) {
	let answer = 'YES';

	if (str.split('').reverse().join('') !== str) answer = 'NO';

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	let felindrom = input[i].toLowerCase().replace(/[^a-z]/g, 'a');
	console.log(solution(felindrom));
}
