from collections import deque

def solution(rectangle, characterX, characterY, itemX, itemY):
    
    graph = [[-1 for _ in range(102)] for _ in range(102)]
    dp = [[-1 for _ in range(102)] for _ in range(102)]
    
    for rect in rectangle:
        startX, startY, endX, endY = map(lambda x: x * 2, rect)
        
        for i in range(startX, endX + 1):
            for j in range(startY, endY + 1):
                if startX < i < endX and startY < j < endY:
                    graph[i][j] = 0                  
                elif graph[i][j] != 0:
                    graph[i][j] = 1
    
    cX, cY, iX, iY = characterX * 2, characterY * 2, itemX * 2, itemY * 2
    
    def bfs():
        queue = deque()
        queue.append([cX, cY])
        dp[cX][cY] = 0
        
        while queue:
            curX, curY = queue.popleft()            
            
            if curX == iX and curY == iY:
                return dp[iX][iY] // 2
            
            for nextX, nextY in [[curX + 1, curY], [curX - 1, curY], [curX, curY + 1], [curX, curY - 1]]:
                if nextX < 0 or nextX >= 102 or nextY < 0 or nextY >= 102:
                    continue
                
                if graph[nextX][nextY] == 1:
                    if dp[nextX][nextY] < 0 or dp[nextX][nextY] > dp[curX][curY] + 1:
                        dp[nextX][nextY] = dp[curX][curY] + 1
                        queue.append([nextX, nextY])
    
    answer = bfs()
    return answer