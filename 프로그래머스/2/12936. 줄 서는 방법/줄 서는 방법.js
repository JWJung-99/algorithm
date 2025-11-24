function solution(n, k) {
	let answer = [];
	let nums = Array.from({ length: n }, (_, i) => i + 1);

	// 팩토리얼 계산 후 저장
	let factorial = Array(n).fill(1);
	for (let i = 1; i < n; i++) factorial[i] = factorial[i - 1] * i;

	let nth = k - 1;

	while (nums.length) {
		if (nth === 0) {
			answer.push(...nums);
			break;
		}

		let fact = factorial[nums.length - 1];
		let index = parseInt(nth / fact);

		answer.push(nums[index]);
		nth %= fact;

		nums.splice(index, 1);
	}

	return answer;
}