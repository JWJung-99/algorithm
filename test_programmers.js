// idea: 각 바위 사이의 거리를 기준으로 이분탐색
function solution(distance, rocks, n) {
	rocks.sort((a, b) => a - b);

	let start = 1;
	let end = distance;

	let answer = 0;

	while (start <= end) {
		let mid = parseInt((start + end) / 2);

		let removed = 0;
		let index = 0;

		// 각 바위 사이의 거리가 mid보다 작거나 같다면 제거
		for (let rock of rocks) {
			if (rock - index < mid) removed++;
			else index = rock;
		}

		if (distance - index < mid) removed++;

		// n개보다 많이 제거했다면 기준 거리를 줄여야 함
		if (removed > n) {
			end = mid - 1;
		} else {
			start = mid + 1;
			answer = mid;
		}
	}

	return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
