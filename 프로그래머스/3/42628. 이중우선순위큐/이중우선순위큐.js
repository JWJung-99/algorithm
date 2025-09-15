/**
 * @description 힙을 사용하지 않고 이중우선순위큐 구현
 * @param {string[]} operations
 * @returns {[number, number]}
 */
function solution(operations) {
	let queue = [];

	function operation(oper, num) {
		switch (oper) {
			case 'I':
				queue.push(num);
				break;
			case 'D':
				if (num === 1) queue.splice(queue.indexOf(Math.max(...queue)), 1);
				else queue.splice(queue.indexOf(Math.min(...queue)), 1);
		}
	}

	for (let command of operations) {
		let [oper, num] = command.split(' ');
		operation(oper, +num);
	}

	if (queue.length) {
		return [Math.max(...queue), Math.min(...queue)];
	} else return [0, 0];
}

/**
 * @description Heap을 구현해서 풀이
 * @param {string[]} operations
 * @returns {[number, number]}
 */
function solution2(operations) {}
