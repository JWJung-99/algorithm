function solution(maps) {
    let N = maps.length;
    let M = maps[0].length;
    
    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];
    
    function BFS(x, y, visited) {
        visited[x][y] = true;
        let queue = [[x, y]];
        let answer = Number(maps[x][y]);
        
        while (queue.length) {
            let [curX, curY] = queue.shift();
            
            for (let i = 0; i < 4; i++) {
                let nextX = curX + dx[i];
                let nextY = curY + dy[i];
                
                if (nextX < 0 || nextX >= N || nextY < 0 || nextY >= M || visited[nextX][nextY] || maps[nextX][nextY] === 'X') continue;
                
                answer += Number(maps[nextX][nextY]);
                visited[nextX][nextY] = true;
                queue.push([nextX, nextY]);
            }
        }
        
        return answer;
    }
    
    let visited = Array.from({length: N + 1}, () => Array(M).fill(false));
    let result = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (maps[i][j] === 'X') continue;
            if (visited[i][j]) continue;
            
            result.push(BFS(i, j, visited));
        }
    }
    
    return result.length ? result.sort((a, b) => a - b) : [-1];
}