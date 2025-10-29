function solution(begin, target, words) {
	let N = begin.length;

	let visited = {};
	for (let word of words) {
		visited[word] = false;
	}

	let isChanged = false;
	let answer = 1e9;
	function DFS(depth, word) {
		if (word === target) {
			answer = Math.min(answer, depth);
			isChanged = true;
			return;
		} else {
			for (let i = 0; i < N; i++) {
				let A = word.slice(0, i) + word.slice(i + 1);

				for (let x of words) {
					let B = x.slice(0, i) + x.slice(i + 1);

					if (A === B) {
						if (!visited[x]) {
							visited[x] = true;
							DFS(depth + 1, x);
							visited[x] = false;
						}
					}
				}
			}
		}
	}

	DFS(0, begin);

	return isChanged ? answer : 0;
}