function solution(tickets) {
    var answer = [];
    
    tickets.sort();
    let visited = Array(tickets.length).fill(false);
    
    
    function DFS(cur, path) {
        if (path.length === tickets.length + 1) answer.push(path);
        
        for (let i = 0; i < tickets.length; i++) {
            if (visited[i]) continue;
            
            const [origin, dest] = tickets[i];
            
            if (cur !== origin) continue;
            else {
                visited[i] = true;
                DFS(dest, [...path, dest]);
                visited[i] = false;
            }
        }
    }
    
    DFS("ICN", ["ICN"]);
    
    return answer.sort()[0];
}