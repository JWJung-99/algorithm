function solution(tickets) {
	tickets.sort();

	let N = tickets.length;
	let visited = Array(N).fill(false);

	let answer = [];

	function DFS(depth, origin, result) {
		if (depth === N) answer.push(result);
		for (let i = 0; i < tickets.length; i++) {
			if (visited[i]) continue;

			if (origin === tickets[i][0]) {
				let dest = tickets[i][1];
				visited[i] = true;
				DFS(depth + 1, dest, [...result, dest]);
				visited[i] = false;
			}
		}
	}

	DFS(0, 'ICN', ['ICN']);

	return answer[0];
}