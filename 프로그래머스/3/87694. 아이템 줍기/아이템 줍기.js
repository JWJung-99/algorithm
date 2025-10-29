function solution(rectangle, characterX, characterY, itemX, itemY) {
    let answer = 0;
    
	characterX *= 2;
	characterY *= 2;
	itemX *= 2;
	itemY *= 2;

	let map = Array.from({ length: 103 }, () => Array(101).fill(0));
	rectangle = rectangle.map((item) => item.map((x) => x * 2));
	for (let [x1, y1, x2, y2] of rectangle) {
		for (let i = x1; i <= x2; i++) {
			for (let j = y1; j <= y2; j++) {
				if (i === x1 || i === x2 || j === y1 || j === y2) {
					if (map[i][j] === 0) map[i][j] = 1;
				} else map[i][j] = 2;
			}
		}
	}

	let dx = [-1, 0, 1, 0];
	let dy = [0, -1, 0, 1];

	let queue = [[characterX, characterY, 0]];
	map[characterX][characterY] = 0;

	while (queue.length) {
		let [curX, curY, cnt] = queue.shift();

		if (curX === itemX && curY === itemY) {
            answer = cnt / 2;
            break;
        }

		for (let i = 0; i < 4; i++) {
			let nextX = curX + dx[i];
			let nextY = curY + dy[i];

			if (map[nextX][nextY] === 1) {
				queue.push([nextX, nextY, cnt + 1]);
				map[nextX][nextY] = 0;
			}
		}
	}

	return answer;
}