function solution(sizes) {
	let maxW = 0;
	let maxH = 0;

	for (let card of sizes) {
		let [w, h] = card.sort((a, b) => b - a);

		if (maxW < w) maxW = w;
		if (maxH < h) maxH = h;
	}

	return maxW * maxH;
}

console.log(
	solution([
		[60, 50],
		[30, 70],
		[60, 30],
		[80, 40],
	])
);
