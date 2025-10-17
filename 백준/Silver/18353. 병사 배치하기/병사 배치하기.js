let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// DP 이용
let N = Number(input[0]);
let soldiers = input[1].split(' ').map(Number).reverse();

let dp = Array(N).fill(1);

for (let i = 1; i < soldiers.length; i++) {
	for (let j = 0; j < i; j++) {
		if (soldiers[j] < soldiers[i]) {
			dp[i] = Math.max(dp[i], dp[j] + 1);
		}
	}
}

console.log(N - Math.max(...dp));

// 이진탐색 이용
function lowerBound(arr, target, start, end) {
	while (start < end) {
		let mid = parseInt((start + end) / 2);
		if (arr[mid] >= target) end = mid;
		else start = mid + 1;
	}

	return end;
}

let lis = [0];

for (let soldier of soldiers) {
	if (soldier > lis[lis.length - 1]) {
		lis.push(soldier);
	} else {
		let index = lowerBound(lis, soldier, 0, lis.length);
		lis[index] = soldier;
	}
}

console.log(N - (lis.length - 1));
