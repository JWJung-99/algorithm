/*
[문제]
자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열

[입력]
첫째 줄에 자연수 N과 M이 주어진다. (1 ≤ M ≤ N ≤ 8)

[출력]
한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러 번 출력하면 안되며, 각 수열은 공백으로 구분해서 출력해야 한다.

수열은 사전 순으로 증가하는 순서로 출력해야 한다.
*/

import fs from 'fs';
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let numbers = [];

let answer = '';

// 풀이 1: 유망한 노드 판단
function possible(x) {
	for (let a of numbers) {
		if (a == x) return false;
	}
	return true;
}

function dfs(index) {
	if (index == M) answer += numbers.join(' ') + '\n';

	for (let i = 1; i <= N; i++) {
		if (!possible(i)) continue;

		numbers.push(i);
		dfs(index + 1);
		numbers.pop();
	}
}

dfs(0);
console.log(answer);

// 풀이 2: 방문 배열 사용
let visited = Array(N + 1).fill(false);
let selected = [];
answer = [];

function DFS(n) {
	if (n === M) {
		answer.push(selected.join(' '));
	} else {
		for (let i = 1; i <= N; i++) {
			if (visited[i]) continue;

			visited[i] = true;
			selected.push(i);
			DFS(n + 1);
			selected.pop();
			visited[i] = false;
		}
	}
}

DFS(0);

console.log(answer.join('\n'));
