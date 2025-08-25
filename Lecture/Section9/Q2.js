import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 1번 정점에서 N번 정점으로 이동하는 가짓수 출력 (인접행렬 활용)
 * @param {number} N 목적지
 * @param {[number, number][]} graph 방향그래프
 * @returns {number}
 */
function solution(N, arr) {
	let answer = 0;
	let graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
	for (let [from, to] of arr) {
		graph[from][to] = 1;
	}

	let visited = Array.from({ length: N + 1 }).fill(false);

	function DFS(v) {
		if (v === N) {
			answer++;
		} else {
			for (let i = 1; i <= N; i++) {
				if (graph[v][i] === 1 && !visited[i]) {
					visited[i] = true;
					DFS(i);
					visited[i] = false;
				}
			}
		}
	}

	visited[1] = true;
	DFS(1);

	return answer;
}

let index = 1;
while (testCase > 0) {
	const [N, M] = input[index].split(' ').map(Number);
	const arr = [];
	for (let i = index + 1; i <= index + M; i++) {
		arr.push(input[i].split(' ').map(Number));
	}
	console.log(solution(N, arr));

	testCase--;
	index += M + 1;
}
