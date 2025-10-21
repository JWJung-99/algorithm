let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let index = 0;
let caseNo = 1;

while (1) {
	let [N, M] = input[index].split(' ').map(Number);

	if (N === 0 && M === 0) break;

	let graph = Array.from({ length: N + 1 }, () => []);
	for (let i = index + 1; i <= index + M; i++) {
		let [from, to] = input[i].split(' ').map(Number);
		graph[from].push(to);
		graph[to].push(from);
	}

	let visited = Array(N + 1).fill(false);

	function hasCycle(node, prev) {
		visited[node] = true;

		for (let next of graph[node]) {
			if (!visited[next]) {
				if (hasCycle(next, node)) return true;
			} else if (next !== prev) return true;
		}

		return false;
	}

	let answer = 0;
	for (let i = 1; i <= N; i++) {
		if (visited[i]) continue;

		if (!hasCycle(i, 0)) answer++;
	}

	if (answer === 0) console.log(`Case ${caseNo}: No trees.`);
	else if (answer === 1) console.log(`Case ${caseNo}: There is one tree.`);
	else console.log(`Case ${caseNo}: A forest of ${answer} trees.`);

	caseNo++;
	index += M + 1;
}