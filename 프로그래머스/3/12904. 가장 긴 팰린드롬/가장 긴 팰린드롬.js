function solution(s) {
	let answer = 0;

	function findPalindrome(left, right) {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			answer = Math.max(answer, right - left + 1);
			left--;
			right++;
		}
	}

	for (let i = 0; i < s.length; i++) {
		// 홀수 길이 탐색
		findPalindrome(i, i);

		// 짝수 길이 탐색
		findPalindrome(i, i + 1);
	}

	return answer;
}
