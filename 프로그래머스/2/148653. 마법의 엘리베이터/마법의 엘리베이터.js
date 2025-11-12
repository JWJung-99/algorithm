function solution(storey) {
	if (storey <= 5) return storey;

	const cur = storey % 10;
	const next = (storey - cur) / 10;

	return Math.min(cur + solution(next), 10 - cur + solution(next + 1));
}