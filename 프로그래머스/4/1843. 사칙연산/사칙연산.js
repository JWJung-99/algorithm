function solution(arr) {
	let operands = Math.ceil(arr.length / 2);

	// max_dp[i][j]: i번째 피연산자부터 j번째 피연산자까지 연산 결과의 최댓값
	const max_dp = Array.from({ length: operands }, () =>
		Array(operands).fill(-Infinity)
	);
	// min_dp[i][j]: i번째 피연산자부터 j번째 피연산자까지 연산 결과의 최솟값
	const min_dp = Array.from({ length: operands }, () =>
		Array(operands).fill(Infinity)
	);

	// dp[i][i]: 피연산자의 최대/최솟값은 자기 자신
	for (let i = 0; i < operands; i++) {
		max_dp[i][i] = Number(arr[i * 2]);
		min_dp[i][i] = Number(arr[i * 2]);
	}

	for (let cnt = 1; cnt < operands; cnt++) {
		for (let i = 0; i < operands - cnt; i++) {
			let j = i + cnt;
			for (let k = i; k < j; k++) {
				if (arr[k * 2 + 1] === '+') {
					max_dp[i][j] = Math.max(
						max_dp[i][j],
						max_dp[i][k] + max_dp[k + 1][j]
					);
					min_dp[i][j] = Math.min(
						min_dp[i][j],
						min_dp[i][k] + min_dp[k + 1][j]
					);
				} else {
					max_dp[i][j] = Math.max(
						max_dp[i][j],
						max_dp[i][k] - min_dp[k + 1][j]
					);
					min_dp[i][j] = Math.min(
						min_dp[i][j],
						min_dp[i][k] - max_dp[k + 1][j]
					);
				}
			}
		}
	}

	return max_dp[0][operands - 1];
}