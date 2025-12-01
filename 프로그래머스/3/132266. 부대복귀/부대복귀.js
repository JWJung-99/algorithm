function solution(n, roads, sources, destination) {    
    let graph = Array.from({length: n + 1}, () => []);
    for (let [a, b] of roads) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    let distance = Array(n + 1).fill(-1);
    distance[destination] = 0;
    
    let queue = [[destination]];        
    while (queue.length) {
        let cur = queue.shift();

        for (let next of graph[cur]) {
            if (distance[next] !== -1) continue;

            distance[next] = distance[cur] + 1;
            queue.push([next]);
        }
    }
    
    return sources.map((source) => distance[source]);
}