import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 아나그램인지 판별하는 함수
 * @param {{[key: string]: number}} sObj
 * @param {{[key: string]: number}} tObj
 * @returns {boolean}
 */
function isAnagram(sObj, tObj) {
	if (sObj.length !== tObj.length) return false;

	for (let [key, value] of Object.entries(sObj)) {
		if (!tObj.hasOwnProperty(key) || tObj[key] !== value) return false;
	}

	return true;
}

/**
 *
 * @param {string[]} S
 * @param {string} T
 * @returns {Number}
 */
function solution(S, T) {
	let answer = 0;
	const len = T.length - 1;

	const sObj = {};
	const tObj = {};

	for (let char of T) {
		tObj[char] = (tObj[char] ?? 0) + 1;
	}

	for (let i = 0; i < len; i++) {
		sObj[S[i]] = (sObj[S[i]] ?? 0) + 1;
	}

	let p1 = 0;
	for (let p2 = len; p2 < S.length; p2++) {
		// 새로운 원소 추가
		sObj[S[p2]] = (sObj[S[p2]] ?? 0) + 1;

		// 비교
		if (isAnagram(sObj, tObj)) answer++;

		// 기존 원소 제거
		sObj[S[p1]] -= 1;
		if (sObj[S[p1]] === 0) delete sObj[S[p1]];

		p1++;
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	const S = input[index].split('');
	const T = input[index + 1];

	console.log(solution(S, T));

	testCase--;
	index += 2;
}
