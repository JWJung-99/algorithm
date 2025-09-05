function solution(n, computers) {
    let answer = 0;
    let visited = Array.from({ length: n }, () => false);
    
    function DFS(index) {
        visited[index] = true;
        
        for (let i = 0; i < computers[index].length; i++) {
            if (!visited[i] && computers[index][i] === 1) {
                DFS(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        
        DFS(i);
        answer++;
    }
    
    return answer;
}