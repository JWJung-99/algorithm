function solution(dirs) {
    let direction = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0],
    }
    
    let visitedPath = new Set();
    
    let [curX, curY] = [0, 0];
    
    for (let dir of dirs) {
        let [nextX, nextY] = [curX + direction[dir][0], curY + direction[dir][1]];
        
        if (nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5) continue;
        
        // 지나온 길을 기록 -> 반대 방향도 포함해야 함!
        visitedPath.add(`${curX}${curY}${nextX}${nextY}`);
        visitedPath.add(`${nextX}${nextY}${curX}${curY}`);
        
        [curX, curY] = [nextX, nextY];
    }
    
    // 양방향 모두 기록했으므로 / 2
    return visitedPath.size / 2;
}