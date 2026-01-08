function solution(n, results) {
	let win = Array.from({ length: n + 1 }, () => []);
	let lose = Array.from({ length: n + 1 }, () => []);
    
    // 승패 관계 모두 기록
	for (let [A, B] of results) {
		win[A].push(B);
		lose[B].push(A);
	}

	let answer = 0;

    // 연결된 간선의 개수 파악
	function BFS(start, graph) {
		let edges = 0;
		let visited = Array.from({ length: n + 1 }, () => false);

		let queue = [start];
		visited[start] = true;

		while (queue.length) {
			let cur = queue.shift();

			for (let next of graph[cur]) {
				if (!visited[next]) {
					edges++;
					visited[next] = true;
					queue.push(next);
				}
			}
		}

		return edges;
	}

	for (let i = 1; i <= n; i++) {
        // 순위가 높은 선수, 낮은 선수를 연결했을 때 간선의 개수가 n - 1이면 순위 파악 가능
		if (BFS(i, win) + BFS(i, lose) === n - 1) answer++;
	}

	return answer;
}