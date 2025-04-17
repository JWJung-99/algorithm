def solution(n, computers):
    parent = [0 for _ in range(n + 1)]
    
    def Find(node): 
        if parent[node] != 0:
            return Find(parent[node])
        return node
    
    def Union(a, b): 
        a = Find(a)
        b = Find(b)
        
        if a < b:
            parent[b] = a
        else:
            parent[a] = b
    
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            if i != j:
                if computers[i - 1][j - 1] == 1:
                    if Find(i) != Find(j):
                        Union(i, j)
    
    answer = parent.count(0) - 1
    return answer