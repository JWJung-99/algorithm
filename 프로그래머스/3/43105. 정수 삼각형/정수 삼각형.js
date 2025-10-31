function solution(triangle) {
	let N = triangle.length;
	for (let i = 1; i < N; i++) {
		for (let j = 0; j < triangle[i].length; j++) {
			if (j === 0) triangle[i][j] += triangle[i - 1][j];
			else if (j === i) triangle[i][j] += triangle[i - 1][j - 1];
			else
				triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
		}
	}

	return Math.max(...triangle[N - 1]);
}