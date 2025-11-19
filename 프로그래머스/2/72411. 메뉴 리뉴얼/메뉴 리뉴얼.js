function solution(orders, course) {
	let courseObj = {};

	function DFS(n, menus, len, arr) {
		if (arr.length === len) {
			let menu = arr.join('');
			if (courseObj[menu]) {
				courseObj[menu] += 1;
			} else {
				courseObj[menu] = 1;
			}

			return;
		} else {
			for (let i = n; i < menus.length; i++) {
				arr.push(menus[i]);
				DFS(i + 1, menus, len, arr);
				arr.pop();
			}
		}
	}

	for (let order of orders) {
		let menus = order.split('').sort();

		for (let len of course) {
			if (menus.length < len) continue;
			DFS(0, menus, len, []);
		}
	}

	let result = [];
	for (let len of course) {
		let arr = Object.entries(courseObj).filter(
			([key, value]) => key.length === len && value >= 2
		);

		if (arr.length === 0) continue;
		const maxCount = Math.max(...arr.map((e) => e[1]));
		for (let [menu, count] of arr) {
			if (count === maxCount) result.push(menu);
		}
	}

	return result.sort();
}