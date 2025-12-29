function solution(scores) {
	const [wanhoA, wanhoB] = scores[0];

	// 1. 근무태도 기반 내림차순 정렬, 같다면 동료 평가 기반 오름차순 정렬
	scores.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));

    // 최초 순위 1부터 시작
	let answer = 1;
	let maxB = 0;

	for (let [a, b] of scores) {
		if (a > wanhoA && b > wanhoB) return -1;

		// 2. 근무태도 기반 내림차순 정렬된 상태이므로, 동료 평가가 이전 점수들보다 크거나 같아야 함!
		// 2-1. 근무태도 점수도 작고, 동료 평가 점수도 작다면 탈락
		if (b < maxB) continue;
		else {
			maxB = Math.max(maxB, b);
			// 3. 합산 점수가 완호의 합산 점수보다 높다면 완호의 순위 조정
			if (a + b > wanhoA + wanhoB) answer += 1;
		}
	}

	return answer;
}