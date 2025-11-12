function solution(sticker) {
	let N = sticker.length;
    
    // 스티커의 길이가 1인 경우
	if (N === 1) return sticker[0];
    
	let dp1 = Array(N).fill(0);
	let dp2 = Array(N).fill(0);

	// 첫 번째 원소를 선택하는 경우 -> 마지막 원소를 선택할 수 없음
	dp1[0] = sticker[0];
	dp1[1] = sticker[0];

	for (let i = 2; i < N - 1; i++) {
		dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
	}

	// 첫 번째 원소를 선택하지 않는 경우 -> 마지막 원소를 선택할 수 있음
	dp2[0] = 0;
	dp2[1] = sticker[1];

	for (let i = 2; i < N; i++) {
		dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
	}

	return Math.max(dp1[N - 2], dp2[N - 1]);
}