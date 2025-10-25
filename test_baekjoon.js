import fs from 'fs';
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let numbers = input[1].split(' ').map(Number);
let [add, sub, mul, div] = input[2].split(' ').map(Number);
let min = 1e9;
let max = -1e9;

function DFS(n, value) {
	if (n === N) {
		min = Math.min(min, value);
		max = Math.max(max, value);
		return;
	} else {
		if (add > 0) {
			add--;
			DFS(n + 1, value + numbers[n]);
			add++;
		}

		if (sub > 0) {
			sub--;
			DFS(n + 1, value - numbers[n]);
			sub++;
		}

		if (mul > 0) {
			mul--;
			DFS(n + 1, value * numbers[n]);
			mul++;
		}

		if (div > 0) {
			div--;
			DFS(n + 1, ~~(value / numbers[n]));
			div++;
		}
	}
}

DFS(1, numbers[0]);
console.log(max);
console.log(min);
