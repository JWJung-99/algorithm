let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let balls = [];
for (let i = 1; i <= N; i++) {
	balls.push([i - 1, ...input[i].split(' ').map(Number)]);
}

// 크기를 기준으로 오름차순 정렬
balls.sort((a, b) => a[2] - b[2]);

let sum = 0;
// 색상별 크기의 합
let colorSum = Array(200001).fill(0);
let result = Array(N).fill(0);

let start = 0;
for (let i = 0; i < N; i++) {
	let [index, color, size] = balls[i];

	while (balls[start][2] < size) {
		sum += balls[start][2];
		colorSum[balls[start][1]] += balls[start][2];
		start++;
	}

	result[index] = sum - colorSum[color];
}

console.log(result.join('\n'));