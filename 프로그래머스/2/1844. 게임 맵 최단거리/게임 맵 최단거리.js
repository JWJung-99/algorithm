function solution(maps) {
    let n = maps.length;
    let m = maps[0].length;
    
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    
    let visited = Array.from({ length: n }, () => Array(m).fill(0));
    
    let queue = [];
    
    visited[0][0] = 1;
    queue.push([0, 0, 1]);
    
    while (queue.length) {
        let [curX, curY, cnt] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            let nextX = curX + dx[i];
            let nextY = curY + dy[i];
            
            if (nextX < 0 || nextX >= n || nextY < 0 || nextY > m) continue;
            
            if (visited[nextX][nextY] === 0 && maps[nextX][nextY] === 1) {
                visited[nextX][nextY] = visited[curX][curY] + 1;
                queue.push([nextX, nextY, cnt + 1]);
            }
        }
    }
    
    return visited[n - 1][m - 1] ? visited[n - 1][m - 1] : -1;
}