function solution1(str1, str2) {
	str1 = str1.toUpperCase();
	str2 = str2.toUpperCase();

	let union = [];
	let intersection = [];

	let str1_map = new Map();

	for (let i = 0; i < str1.length - 1; i++) {
		if (
			str1[i].charCodeAt() >= 65 &&
			str1[i].charCodeAt() <= 90 &&
			str1[i + 1].charCodeAt() >= 65 &&
			str1[i + 1].charCodeAt() <= 90
		) {
			let element = str1[i] + str1[i + 1];
			union.push(element);
			str1_map.set(
				element,
				str1_map.get(element) ? str1_map.get(element) + 1 : 1
			);
		}
	}

	for (let i = 0; i < str2.length - 1; i++) {
		if (
			str2[i].charCodeAt() >= 65 &&
			str2[i].charCodeAt() <= 90 &&
			str2[i + 1].charCodeAt() >= 65 &&
			str2[i + 1].charCodeAt() <= 90
		) {
			let element = str2[i] + str2[i + 1];

			if (str1_map.get(element)) {
				intersection.push(element);
				str1_map.set(element, str1_map.get(element) - 1);
			} else {
				union.push(element);
			}
		}
	}

	if (union.length === 0 && intersection.length === 0) return 1 * 65536;

	return Math.floor((intersection.length / union.length) * 65536);
}

function solution2(str1, str2) {
	function explode(text) {
		const result = [];
		for (let i = 0; i < text.length - 1; i++) {
			const node = text.substr(i, 2);
			if (node.match(/[A-Za-z]{2}/)) {
				result.push(node.toLowerCase());
			}
		}
		return result;
	}

	const arr1 = explode(str1);
	const arr2 = explode(str2);
	const set = new Set([...arr1, ...arr2]);
	let union = 0;
	let intersection = 0;

	set.forEach((item) => {
		const has1 = arr1.filter((x) => x === item).length;
		const has2 = arr2.filter((x) => x === item).length;
		union += Math.max(has1, has2);
		intersection += Math.min(has1, has2);
	});

	return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
