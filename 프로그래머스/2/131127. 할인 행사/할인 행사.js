function solution(want, number, discount) {
	let answer = 0;

	// 원하는 제품과 수량이 할인하는 날짜와 일치하는지 확인
	function checkIsAble(obj) {
		let isAble = true;

		for (let i = 0; i < want.length; i++) {
			if (obj[want[i]] !== number[i]) {
				isAble = false;
				break;
			}
		}

		return isAble;
	}

	// 1일차 ~ 10일차 할인 품목과 개수를 객체로 생성
	let goods = {};

	for (let i = 0; i < 10; i++) {
		if (goods[discount[i]]) {
			goods[discount[i]]++;
		} else {
			goods[discount[i]] = 1;
		}
	}

	if (checkIsAble(goods)) answer++;

	// 2일차부터 ~
	for (let i = 1; i < discount.length - 9; i++) {
		// 객체에서 (i - 1)일차 제품의 개수 - 1
		goods[discount[i - 1]]--;

		// 객체에서 (i + 9)일차 제품의 개수 + 1
		if (goods[discount[i + 9]]) {
			goods[discount[i + 9]]++;
		} else {
			goods[discount[i + 9]] = 1;
		}

		if (checkIsAble(goods)) answer++;
	}

	return answer;
}
