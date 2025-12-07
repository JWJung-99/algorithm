function solution(diffs, times, limit) {
	let answer = Number.MAX_SAFE_INTEGER;
	let n = diffs.length;
	let start = 1;
	let end = diffs.reduce((a, b) => Math.max(a, b), 0); // O(N) - N: diffs의 길이 (최대 300,000)

    // O(N * logM) - 최악의 경우 300,000 * log2(100,000) ~= 5,100,000
	while (start <= end) { // O(logM) - M: diffs[i]의 최댓값 (최대 100,000);
		let mid = parseInt((start + end) / 2);
		let time = 0;
        
        // O(N) - N: diffs의 길이
		for (let i = 0; i < n; i++) {
			let diff = diffs[i];
			let time_cur = times[i];

			if (diff <= mid) time += time_cur;
			else {
				let time_prev = times[i - 1];
				let wrong = diff - mid;
				time += (time_cur + time_prev) * wrong + time_cur;
			}
		}

		// 제한시간 안에 풀 수 있다면 level을 낮춰야 함
		if (time <= limit) {
			answer = Math.min(answer, mid);
			end = mid - 1;
		}
		// 제한시간 안에 풀 수 없다면 => level을 높여야 함
		else {
			start = mid + 1;
		}
	}

	return answer;
}