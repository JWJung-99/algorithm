function solution(gems) {
	const types = new Set(gems).size;
	const map = new Map();
	let minLength = 100001;
	let answer = [0, 0];

	for (let i = 0; i < gems.length; i++) {
		map.delete(gems[i]);
		map.set(gems[i], i + 1);

		if (map.size === types) {
			let start = map.values().next().value;
			let end = i + 1;
			let mapLength = end - start + 1;

			if (mapLength < minLength) {
				minLength = mapLength;
				answer = [start, end];
			}
		}
	}

	return answer;
}