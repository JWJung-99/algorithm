function solution(book_time) {
	let N = book_time.length;
	let arr = book_time
		.map(([start, end]) => {
			const [sh, sm] = start.split(':').map(Number);
			const [eh, em] = end.split(':').map(Number);

			return [sh * 60 + sm, eh * 60 + em];
		})
		.sort((a, b) => a[0] - b[0]);

	let visited = Array(N).fill(false);

	function BFS(index) {
		visited[index] = true;
		let queue = [];
		queue.push([arr[index], index]);

		while (queue.length) {
			let [prevTime, prevIndex] = queue.shift();

			for (let i = prevIndex + 1; i < N; i++) {
				if (visited[i]) continue;

				let prevEnd = prevTime[1];
				let newStart = arr[i][0];

				if (newStart >= prevEnd + 10) {
					visited[i] = true;
					queue.push([arr[i], i]);
                    break;
				}
			}
		}
	}

	let answer = 0;
	for (let i = 0; i < N; i++) {
		if (!visited[i]) {
			answer++;
			BFS(i);
		}
	}

	return answer;
}