function solution(a) {
	let len = a.length;
	let left = Array(len);
	let right = Array(len);

	left[0] = a[0];
	for (let i = 1; i < len; i++) {
		left[i] = Math.min(left[i - 1], a[i]);
	}

	right[len - 1] = a[len - 1];
	for (let i = len - 2; i >= 0; i--) {
		right[i] = Math.min(right[i + 1], a[i]);
	}

	return new Set([...left, ...right]).size;
}