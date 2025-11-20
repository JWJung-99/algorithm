function solution(stones, k) {
	let left = 1;
	let right = 1;
    for (let stone of stones) {
        if (stone > right) right = stone;
    }
    
	let answer = 0;

	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		let cnt = 0;

		let isAble = true;
		for (let stone of stones) {
			if (stone - mid < 0) cnt += 1;
			else cnt = 0;

			if (cnt >= k) {
				isAble = false;
				break;
			}
		}

		if (isAble) {
			answer = Math.max(answer, mid);
			left = mid + 1;
		} else right = mid - 1;
	}

	return answer;
}