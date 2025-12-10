function solution(n) {
	let answer = 0;
	let queens = [];

	function isPossible(x, y) {
		for (let [a, b] of queens) {
			if (x === a || y === b) return false;
			if (Math.abs(x - a) === Math.abs(y - b)) return false;
		}

		return true;
	}

	function DFS(depth) {
		if (depth === n) answer += 1;
		else {
			for (let i = 0; i < n; i++) {
				if (!isPossible(depth, i)) continue;

				queens.push([depth, i]);
				DFS(depth + 1);
				queens.pop();
			}
		}
	}

	DFS(0);

	return answer;
}

// console.log(solution());
console.log(solution(4));
