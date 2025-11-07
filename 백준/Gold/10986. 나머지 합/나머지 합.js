let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let num = input[1].split(' ').map(Number);
let p = [0];
for (let i = 0; i < N; i++) {
	p.push((num[i] + p[i]) % M);
}

let counter = {};
for (let i = 0; i <= N; i++) {
	if (counter[p[i]]) counter[p[i]]++;
	else counter[p[i]] = 1;
}

let answer = 0;
for (let i = 0; i < M; i++) {
	if (counter[i]) answer += parseInt((counter[i] * (counter[i] - 1)) / 2);
}
console.log(answer);