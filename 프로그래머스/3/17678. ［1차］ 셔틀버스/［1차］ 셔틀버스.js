function solution(n, t, m, timetable) {
	// 1. 도착 순서 기준으로 정렬
	timetable = timetable
		.map((crew) => {
			const [h, m] = crew.split(':').map(Number);
			return h * 60 + m;
		})
		.sort((a, b) => a - b);

	let answer = 0;
	let busM = 9 * 60;
	for (let i = 0; i < n; i++) {
		let waitings = timetable.filter((crew) => crew <= busM).length;

		// 2. 승객 태우기
		// 2-1. 마지막 버스인 경우
		if (i === n - 1) {
			// 2-1-1. 대기 인원이 정원과 같거나 더 많은 경우
			if (waitings >= m) answer = timetable[m - 1] - 1;
			// 2-2-2. 대기 인원이 (정원 - 1)보다 적은 경우
			else answer = busM;
		}
		// 2-2. 마지막 버스가 아닌 경우
		else {
			// 2-2-1. 대기 인원이 정원보다 많은 경우
			if (waitings > m) timetable.splice(0, m);
			// 2-2-2. 대기 인원이 정원과 같거나 더 적은 경우
			else timetable.splice(0, waitings);
		}

		// 3. 다음 버스 계산하기
		busM += t;
	}

	return [
		String(parseInt(answer / 60)).padStart(2, '0'),
		String(answer % 60).padStart(2, '0'),
	].join(':');
}