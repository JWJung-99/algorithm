function solution(arr) {
	let count_zero = 0;
	let count_one = 0;

	let N = arr.length;

	function isDivisible(row, col, length) {
		let num = arr[row][col];
		for (let i = row; i < row + length; i++) {
			for (let j = col; j < col + length; j++) {
				if (num !== arr[i][j]) return false;
			}
		}

		return true;
	}

	function DFS(row, col, length) {
		let nextLength = parseInt(length / 2);

		if (!isDivisible(row, col, length)) {
			DFS(row, col, nextLength);
			DFS(row + nextLength, col, nextLength);
			DFS(row, col + nextLength, nextLength);
			DFS(row + nextLength, col + nextLength, nextLength);
		} else {
			if (arr[row][col] === 1) count_one += 1;
			else count_zero += 1;
		}
	}

	DFS(0, 0, N);

	return [count_zero, count_one];
}