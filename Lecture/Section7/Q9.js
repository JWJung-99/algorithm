import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 배열 카운팅 방식
 * @param {number[]} friends
 * @returns {number}
 */
function solution1(friends) {
	let hall = Array.from({ length: 73 }).fill(0);

	friends.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1];
		else return a[0] - b[0];
	});

	friends.forEach(([st, et]) => {
		for (let i = st; i < et; i++) {
			hall[i]++;
		}
	});

	return Math.max(...hall);
}

/**
 * @description
 * @param {number[]} friends
 * @returns {number}
 */
function solution2(friends) {
	let answer = 0;
	let events = [];

	for (let [st, et] of friends) {
		events.push([st, 1]);
		events.push([et, 0]);
	}

	events.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1];
		else return a[0] - b[0];
	});

	let people = 0;
	for (let [time, event] of events) {
		if (event === 1) people++;
		else people--;

		answer = Math.max(people, answer);
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	const N = Number(input[index]);
	const friends = [];

	for (let i = index + 1; i <= index + N; i++) {
		friends.push(input[i].split(' ').map(Number));
	}

	console.log(solution1(friends));
	console.log(solution2(friends));

	testCase--;
	index += N + 1;
}
