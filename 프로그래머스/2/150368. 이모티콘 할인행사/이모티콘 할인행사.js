function solution(users, emoticons) {
	let n = users.length;
	let m = emoticons.length;

	// 할인율
	let discount_ratio = [0.1, 0.2, 0.3, 0.4];

	// 각 이모티콘의 할인율을 나타내는 배열
	let selected = [];
	let visited = Array(m).fill(false);

	// [서비스 최대 가입자 수, 최대 판매액]
	let [max_joins, max_sales] = [0, 0];

	function DFS(depth) {
		if (depth === m) {
			let joins = 0;
			let sales = 0;

			// 사용자 배열을 순회
			for (let [ratio_limit, price_limit] of users) {
				let price = 0;

				for (let i = 0; i < m; i++) {
					// 사용자가 지정한 일정 비율 이상 할인한다면 구매
					if (selected[i] * 100 >= ratio_limit)
						price += emoticons[i] * (1 - selected[i]);
				}

				// 사용자가 지정한 일정 금액 이상 필요하다면 이모티콘 플러스 구매
				if (price >= price_limit) joins += 1;
				// 아니라면 이모티콘 구매
				else sales += price;
			}

			// 최대 가입자 수를 기록한 경우 [서비스 최대 가입자 수, 최대 판매액] 갱신
			if (joins > max_joins) {
				max_joins = joins;
				max_sales = sales;
			}
			// 가입자 수는 동일하지만 판매액이 최대인 경우 최대 판매액 갱신
			else if (joins === max_joins) {
				max_sales = Math.max(max_sales, sales);
			}
		} else {
			for (let i = 0; i < 4; i++) {
				visited[depth] = true;
				selected.push(discount_ratio[i]);
				DFS(depth + 1);
				selected.pop();
				visited[depth] = false;
			}
		}
	}

	DFS(0);

	return [max_joins, max_sales];
}
