function solution(n, computers) {
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