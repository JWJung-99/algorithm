import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution() {}

let index = 1;
while (testCase > 0) {
	testCase--;
	index += 2;
}
