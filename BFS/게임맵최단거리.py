answer = -1

#dfs

def dfs(maps, visited, n, m, curX, curY, distance):
    global answer
    
    if curX == n - 1 and curY == m - 1:
        if answer == -1:
            answer = distance
        elif answer > distance:
            answer = distance
        return
        
    for nextX, nextY in [[curX + 1, curY], [curX, curY + 1], [curX - 1, curY], [curX, curY - 1]]:
        if nextX < 0 or nextX >= n or nextY < 0 or nextY >= m:
            continue
        
        if maps[nextX][nextY] == 1:    
            if not visited[nextX][nextY]:        
                visited[nextX][nextY] = True
                dfs(maps, visited, n, m, nextX, nextY, distance + 1)
                visited[nextX][nextY] = False
    
    return
    
def solution(maps):
    n, m = len(maps), len(maps[0])
    visited = [[False] * m for _ in range(n)]
     
    visited[0][0] = True
    dfs(maps, visited, n, m, 0, 0, 1)
    
    return answer


# bfs
from collections import deque

def bfs(maps, n, m, x, y):
    queue = deque([[x, y]])
    
    while queue:
        curX, curY = queue.popleft()
        
        for nextX, nextY in [[curX + 1, curY], [curX, curY + 1], [curX - 1, curY], [curX, curY - 1]]:
            if nextX < 0 or nextX >= n or nextY < 0 or nextY >= m:
                continue
            
            if maps[nextX][nextY] == 1:
                maps[nextX][nextY] = 1 + maps[curX][curY]
                queue.append([nextX, nextY])
    
    
def solution(maps):
    n, m = len(maps), len(maps[0])
    
    bfs(maps, n, m, 0, 0)
    
    answer = maps[n - 1][m - 1]
    
    if answer == 1:
        return -1
    
    return answer