function solution(n, wires) {
    let minResult = n;
    
    for (let i = 0; i < wires.length; i++) {
        // 1. 전선 하나씩 끊어서 그래프 생성
        let arr = wires.filter((_, index) => index !== i);
        let graph = Array.from({length: n + 1}, () => []);
    
        for (let [x, y] of arr) {
            graph[x].push(y);
            graph[y].push(x);
        }
        
        // 2. 1이 속한 네트워크에 연결된 송전탑의 개수 계산
        let network = 0;
        let visited = Array(n + 1).fill(false);
        let queue = [1];
        visited[1] = true;
        
        while (queue.length) {
            let curNode = queue.shift();
            network++;
            
            for (let next of graph[curNode]) {
                if (visited[next]) continue;
                
                visited[next] = true;
                queue.push(next);
            }
        }
        
        // 3. 두 전력망의 송전탑의 개수 차이 계산
        let diff = Math.abs(n - (network * 2));
        
        // 4. 송전탑의 개수 차이의 최솟값 계산
        if (minResult > diff) minResult = diff;
    }
    
    return minResult;
}