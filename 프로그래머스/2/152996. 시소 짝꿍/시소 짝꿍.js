function solution(weights) {
	let answer = 0;

	let ratios = [1, 4 / 3, 3 / 2, 2];
	let map = {};

	weights.sort((a, b) => b - a);

	for (let weight of weights) {
		for (let ratio of ratios) {
			let seesaw = weight * ratio;

			if (map[seesaw]) answer += map[seesaw];
		}

		if (map[weight]) map[weight] += 1;
		else map[weight] = 1;
	}

	return answer;
}