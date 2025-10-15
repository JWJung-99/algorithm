function solution(name) {
	let answer = 0;

	let minHorizontalMove = name.length - 1;

	for (let i = 0; i < name.length; i++) {
		answer += Math.min(name[i].charCodeAt(0) - 65, 91 - name[i].charCodeAt(0));

		let nextIndex = i + 1;
		while (nextIndex < name.length && name[nextIndex] === 'A') {
			nextIndex++;
		}

		minHorizontalMove = Math.min(
			minHorizontalMove,
			i * 2 + name.length - nextIndex,
			(name.length - nextIndex) * 2 + i
		);
	}

	return answer + minHorizontalMove;
}