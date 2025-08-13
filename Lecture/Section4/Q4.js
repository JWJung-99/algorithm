import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} budget
 * @param {Array([number, number])} gifts
 */
function solution(budget, gifts) {
	let answer = 0;
	let n = gifts.length;

	// 오름차순 정렬
	gifts.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

	for (let i = 0; i < n; i++) {
		let money = budget - (parseInt(gifts[i][0] / 2) + gifts[i][1]);
		let cnt = 1;

		for (let j = 0; j < n; j++) {
			// 이미 50% 할인 상품 구매
			if (j === i) continue;

			// 남은 금액이 상품보다 크거나 같다면
			if (money >= gifts[j][0] + gifts[j][1]) {
				// 구매
				money -= gifts[j][0] + gifts[j][1];
				cnt++;
			} else {
				// 이미 정렬되어 있기 때문에, 남은 금액이 더 작다면 더이상 구매할 수 없으므로 반복문 종료
				break;
			}
		}

		answer = Math.max(answer, cnt);
	}

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	const [n, budget] = input[i].split(' ').map(Number);
	const gifts = [];

	for (let j = i + 1; j <= i + n; j++) {
		gifts.push(input[j].split(' ').map(Number));
	}

	console.log(solution(budget, gifts));
}
