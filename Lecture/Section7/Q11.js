import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 필요한 DVD의 개수 카운팅
 * @param {number[]} songs
 * @param {number} capacity
 * @returns {number}
 */
function count(songs, capacity) {
	let cnt = 1;
	let acc = 0;
	for (let song of songs) {
		if (acc + song > capacity) {
			cnt++;
			acc = song;
		} else {
			acc += song;
		}
	}
	return cnt;
}

/**
 * @param {number} M
 * @param {number[]} songs
 * @returns {number}
 */
function solution(M, songs) {
	let answer = 0;
	let left = Math.max(...songs);
	let right = songs.reduce((acc, cur) => acc + cur);

	while (left <= right) {
		let mid = parseInt((left + right) / 2);

		if (count(songs, mid) <= M) {
			answer = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	const [N, M] = input[index].split(' ').map(Number);
	const songs = input[index + 1].split(' ').map(Number);
	console.log(solution(M, songs));

	testCase--;
	index += 2;
}
