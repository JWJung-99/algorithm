def solution(k, dungeons):
    
    selected = []
    visited = [False for _ in range(len(dungeons))]
    arr = []
    
    def dfs(k, depth):
        # 종료 조건
        if depth == len(dungeons):
            count = 0
            for index in selected:
                if k >= dungeons[index][0]:
                    count += 1
                    k -= dungeons[index][1]
            
            arr.append(count)
            return
        
        
        for i in range(len(dungeons)):
            if not visited[i]:
                visited[i] = True
                selected.append(i)
                dfs(k, depth + 1)
                selected.pop()
                visited[i] = False
    
    dfs(k, 0)
    
    return max(arr)