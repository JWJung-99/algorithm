function BFS(x, y, place, visited) {
	let dx = [-1, 0, 1, 0];
	let dy = [0, -1, 0, 1];

	let queue = [[x, y, 0]];

	while (queue.length) {
		let [curX, curY, mDist] = queue.shift();
        
        // 맨해튼 거리가 2 이하인 위치에 응시자가 있다면 거리두기 실패!
		if (mDist !== 0 && place[curX][curY] === 'P') return false;

		for (let i = 0; i < 4; i++) {
			let [nextX, nextY] = [curX + dx[i], curY + dy[i]];

			if (
				nextX < 0 ||
				nextX >= 5 ||
				nextY < 0 ||
				nextY >= 5 ||
				visited[nextX][nextY]
			)
				continue;
            
            // 파티션이 있는 경우 탐색 종료
			if (place[nextX][nextY] === 'X') continue;
            
            // 맨해튼 거리가 2 미만이며 파티션이 없는 경우 탐색
			if (mDist < 2) {
				visited[nextX][nextY] = true;
				queue.push([nextX, nextY, mDist + 1]);
			}
		}
	}

	return true;
}

function isDistancing(place) {
	let visited = Array.from({ length: 5 }, () => Array(5).fill(false));

	for (let r = 0; r < 5; r++) {
		for (let c = 0; c < 5; c++) {
			if (place[r][c] === 'P') {
				visited[r][c] = true;
				if (!BFS(r, c, place, visited)) return 0;
			}
		}
	}

	return 1;
}

function solution(places) {
	return places.map((place) => isDistancing(place));
}