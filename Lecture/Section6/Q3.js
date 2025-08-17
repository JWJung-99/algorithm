import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {Array<number[]>} board
 * @param {number[]} moves
 * @returns {number}
 */
function solution(board, moves) {
	let answer = 0;
	let basket = [];

	for (let move of moves) {
		let doll = 0;

		// 인형이 있으면 하나 뽑기
		for (let i = 0; i < board.length; i++) {
			if (board[i][move - 1] !== 0) {
				doll = board[i][move - 1];
				board[i][move - 1] = 0;
				break;
			}
		}

		if (doll) {
			if (basket[basket.length - 1] === doll) {
				basket.pop();
				answer += 2;
			} else {
				basket.push(doll);
			}
		}
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	let board = [
		[0, 0, 0, 0, 0],
		[0, 0, 1, 0, 3],
		[0, 2, 5, 0, 1],
		[4, 2, 4, 4, 2],
		[3, 5, 1, 3, 1],
	];
	let moves = [1, 5, 3, 5, 1, 2, 1, 4];

	console.log(solution(board, moves));

	testCase--;
	index += 2;
}
