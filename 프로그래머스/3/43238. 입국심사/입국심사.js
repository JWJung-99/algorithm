// idea: 모든 입국자를 심사하는데 걸리는 시간을 이분탐색
function solution(n, times) {
	let sortedTimes = times.sort((a, b) => a - b);

	let start = 1;
	let end = Math.max(...sortedTimes) * n;

	let answer = 0;
	while (start <= end) {
		let mid = parseInt((start + end) / 2);
		console.log(start, mid, end);

		// 심사관 당 심사 가능한 인원 수의 합 계산
		let cnt = 0;
		for (let x of sortedTimes) {
			cnt += Math.floor(mid / x);
		}
		console.log(cnt);

		if (cnt >= n) {
			answer = mid;
			end = mid - 1;
		} else start = mid + 1;
	}

	return answer;
}