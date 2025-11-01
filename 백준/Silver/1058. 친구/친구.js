let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const INF = 1e9;
let N = Number(input[0]);
let friend = Array.from({ length: N + 1 }, () => Array(N + 1).fill(INF));
for (let i = 1; i <= N; i++) {
	friend[i][i] = 0;
	let arr = input[i].split('');
	for (let j = 0; j < N; j++) {
		if (arr[j] === 'Y') friend[i][j + 1] = 1;
	}
}

for (let k = 1; k <= N; k++) {
	for (let a = 1; a <= N; a++) {
		for (let b = 1; b <= N; b++) {
			// 친구 사이의 거리
			let cost = friend[a][k] + friend[b][k];
			friend[a][b] = Math.min(friend[a][b], cost);
		}
	}
}

let twoFriends = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
	for (let j = 1; j <= N; j++) {
		if (friend[i][j] > 0 && friend[i][j] <= 2) twoFriends[i]++;
	}
}

console.log(Math.max(...twoFriends));