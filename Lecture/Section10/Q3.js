import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description N개의 자연수로 이루어진 수열에서 부분증가수열의 최대 길이
 * @param {number[]} nums
 * @returns {number}
 */
function solution(nums) {
	const N = nums.length;
	let dp = Array(N).fill(0);

	dp[0] = 1;
	for (let i = 1; i < N; i++) {
		let max = 0;

		for (let j = i - 1; j >= 0; j--) {
			if (nums[i] > nums[j] && dp[j] > max) {
				max = dp[j];
			}
		}

		dp[i] = max + 1;
	}

	return Math.max(...dp);
}

let index = 1;
while (testCase > 0) {
	const nums = input[index].split(' ').map(Number);
	console.log(solution(nums));

	testCase--;
	index += 1;
}
