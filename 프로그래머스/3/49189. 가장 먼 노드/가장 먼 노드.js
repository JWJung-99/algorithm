function solution(n, edge) {
    let graph = Array.from({length: n + 1}, () => []);
    for (let [from, to] of edge) {
        graph[from].push(to);
        graph[to].push(from);
    }
    
    let distance = Array(n + 1).fill(-1);
    distance[1] = 0;
    let queue = [[1, 0]];
    
    while (queue.length) {
        let [curNode, curDist] = queue.shift();
        
        for (let nextNode of graph[curNode]) {
            if (distance[nextNode] !== -1) continue;
            
            distance[nextNode] = curDist + 1;
            queue.push([nextNode, curDist + 1]);
        }
    }
    
    let maxDist = Math.max(...distance);
    
    return distance.filter(x => x === maxDist).length;
}