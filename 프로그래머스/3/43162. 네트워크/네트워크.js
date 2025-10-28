// DFS
function solution1(n, computers) {
	let answer = 0;
	let visited = Array(n).fill(false);

	function DFS(node) {
		visited[node] = true;

		for (let i = 0; i < n; i++) {
			if (visited[i]) continue;
			if (computers[node][i] === 1) DFS(i);
		}
	}

	for (let i = 0; i < n; i++) {
		if (!visited[i]) {
			answer++;
			DFS(i);
		}
	}
}

// BFS
function solution2(n, computers) {
	let graph = Array.from({ length: n }, () => new Set([]));
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (i === j) continue;

			if (computers[i][j] === 1) {
				graph[i].add(j);
				graph[j].add(i);
			}
		}
	}
	graph = graph.map((item) => [...item]);

	let answer = 0;
	let visited = Array(n).fill(false);

	function BFS(node) {
		visited[node] = true;
		let queue = [node];

		while (queue.length) {
			let curNode = queue.shift();

			for (let x of graph[curNode]) {
				if (!visited[x]) {
					BFS(x);
				}
			}
		}
	}

	for (let i = 0; i < n; i++) {
		if (!visited[i]) {
			answer++;
			BFS(i);
		}
	}

	return answer;
}
