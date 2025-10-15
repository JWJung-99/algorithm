let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [length, width, height] = input[0].split(' ').map(Number);
let N = Number(input[1]);
let cubes = [];

for (let i = 2; i < N + 2; i++) {
	let [a, b] = input[i].split(' ').map(Number);
	cubes.push([Math.pow(2, a), b]);
}

// 큰 정육면체부터 순서대로
cubes.sort((a, b) => b[0] - a[0]);

let answer = 0;
let filled = 0;

for (let [a, b] of cubes) {
	// 이전 크기의 정육면체로 1개로 채운 것이 현재 크기 정육면체의 8개로 채운 것과 동일
	filled *= 8;

	let required =
		parseInt(length / a) * parseInt(width / a) * parseInt(height / a) - filled;
	let available = Math.min(required, b);

	answer += available;
	filled += available;
}

if (filled === length * width * height) console.log(answer);
else console.log(-1);