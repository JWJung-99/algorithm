from collections import deque

def solution(n, wires):
    answer = n
    
    # 그래프
    graph = [[] for _ in range(n + 1)]
    for x, y in wires:
        graph[x].append(y)
        graph[y].append(x)
    
    def bfs(start):
        cnt = 1
        visited = [False for _ in range(n + 1)]
        
        queue = deque([start])
        visited[start] = True
        
        while queue:
            cur = queue.popleft()
            
            for neighbor in graph[cur]:
                if not visited[neighbor]:
                    visited[neighbor] = True
                    queue.append(neighbor)
                    cnt += 1
                    
        return cnt
            
    
    for x, y in wires:
        graph[x].remove(y)
        graph[y].remove(x)

        tree1 = bfs(x)
        tree2 = n - tree1
        
        answer = min(abs(tree1 - tree2), answer)
        
        graph[x].append(y)
        graph[y].append(x)
    
    return answer