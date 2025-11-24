function solution(rows, columns, queries) {
	const N = rows * columns;

	let maps = Array.from({ length: rows }, (_, row) =>
		Array.from({ length: columns }, (_, col) => row * columns + col + 1)
	);

	let result = [];

	for (let [x1, y1, x2, y2] of queries) {
		[x1, y1, x2, y2] = [x1 - 1, y1 - 1, x2 - 1, y2 - 1];

		let tempMaps = maps.map((rows) => [...rows]);
		let arr = [];

		for (let i = x1; i <= x2; i++) {
			for (let j = y1; j <= y2; j++) {
				if (i < x1 && i < x2 && j < y1 && j < y2) continue;

				if (i === x1 && j !== y1) {
					maps[i][j] = tempMaps[i][j - 1];
					arr.push(tempMaps[i][j - 1]);
					continue;
				}

				if (i === x2 && j !== y2) {
					maps[i][j] = tempMaps[i][j + 1];
					arr.push(tempMaps[i][j + 1]);
					continue;
				}

				if (i !== x2 && j === y1) {
					maps[i][j] = tempMaps[i + 1][j];
					arr.push(tempMaps[i + 1][j]);
					continue;
				}

				if (i !== x1 && j === y2) {
					maps[i][j] = tempMaps[i - 1][j];
					arr.push(tempMaps[i - 1][j]);
					continue;
				}
			}
		}

		result.push(Math.min(...arr));
	}

	return result;
}