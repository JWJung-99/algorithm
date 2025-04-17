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
    