function solution(k, dungeons) {
	let n = dungeons.length;
	let visited = Array(n).fill(false);
	let selected = [];
	let maxResult = 0;

	function DFS(depth) {
		if (depth === n) {
			let remaining = k;
			let result = 0;

			for (let index of selected) {
				let [minimum, usage] = dungeons[index];

				if (remaining < minimum) continue;

				remaining -= usage;
				result++;
			}

			if (result > maxResult) maxResult = result;
		} else {
			for (let i = 0; i < n; i++) {
				if (visited[i]) continue;

				visited[i] = true;
				selected.push(i);
				DFS(depth + 1);
				selected.pop();
				visited[i] = false;
			}
		}
	}

	DFS(0);

	return maxResult;
}

console.log(
	solution(80, [
		[80, 20],
		[50, 40],
		[30, 10],
	])
);
