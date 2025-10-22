let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let houses = [];
let chickens = [];
for (let i = 1; i <= N; i++) {
	let lines = input[i].split(' ').map(Number);

	for (let j = 0; j < lines.length; j++) {
		if (lines[j] === 1) houses.push([i - 1, j]);
		else if (lines[j] === 2) chickens.push([i - 1, j]);
	}
}

// 치킨 거리 계산
function calcChickenDistance(arr) {
	let sum = 0;
	for (let [houseX, houseY] of houses) {
		let distance = 1e9;
		for (let [chickenX, chickenY] of arr) {
			distance = Math.min(
				distance,
				Math.abs(chickenX - houseX) + Math.abs(chickenY - houseY)
			);
		}
		sum += distance;
	}
	return sum;
}

// 남길 치킨집 선택
let visited = Array(chickens.length).fill(false);
let selected = [];
let answer = 1e9;
function DFS(n, start) {
	if (n === M) {
		answer = Math.min(answer, calcChickenDistance(selected));
		return;
	} else {
		for (let i = start; i < chickens.length; i++) {
			if (visited[i]) continue;

			visited[i] = true;
			selected.push(chickens[i]);
			DFS(n + 1, i);
			selected.pop();
			visited[i] = false;
		}
	}
}
DFS(0, 0);
console.log(answer);