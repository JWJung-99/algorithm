function solution(plans) {
	plans = plans
		.map(([name, start, playTime]) => {
			let [h, m] = start.split(':').map(Number);
			return [name, h * 60 + m, Number(playTime)];
		})
		.sort((a, b) => a[1] - b[1]);

	let inProgress = [];
	let answer = [];

	for (let i = 0; i < plans.length; i++) {
		let [name, start, playTime] = plans[i];

		if (i < plans.length - 1) {
			let endTime = start + playTime;
			let nextStart = plans[i + 1][1];

			if (endTime <= nextStart) {
				answer.push(name);
				let remain = nextStart - endTime;

				// 남은 작업 처리
				while (inProgress.length && remain > 0) {
					let [recentName, recentStart, recentPlayTime] = inProgress.pop();
                    
                    // 남은 작업을 모두 처리할 수 있다면
					if (recentPlayTime <= remain) {
						remain -= recentPlayTime;
						answer.push(recentName);
					}
                    // 남은 작업을 처리하다 새로운 작업이 들어온다면
                    else {
						recentPlayTime -= remain;
						inProgress.push([recentName, recentStart, recentPlayTime]);
						break;
					}
				}
			} else {
				inProgress.push([name, start, endTime - nextStart]);
			}
		}
		// 마지막 과제는 그대로 진행
		else {
			answer.push(name);
		}
	}

	while (inProgress.length) {
		answer.push(inProgress.pop()[0]);
	}

	return answer;
}