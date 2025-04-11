from collections import deque

dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]
INF = 1000000

def bfs():
    dist = [[INF] * N for _ in range(N)]
    dist[0][0] = 0 # 시작점 0으로
    
    queue = deque([(0, 0)])
    
    while queue:
        cur_x, cur_y = queue.popleft()
    	
        for i in range(4):
            next_x = cur_x + dx[i]
            next_y = cur_y + dy[i]
            
            if next_x < 0 or next_x >= N or next_y < 0 or next_y >= N:
                continue
             
            diff = 0
            if heights[next_x][next_y] > heights[cur_x][cur_y]:
                diff = heights[next_x][next_y] - heights[cur_x][cur_y]
            
            if dist[next_x][next_y] > dist[cur_x][cur_y] + diff + 1:
                dist[next_x][next_y] = dist[cur_x][cur_y] + diff + 1
                queue.append((next_x, next_y))
    
    return dist[N - 1][N - 1]
    
T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    # ///////////////////////////////////////////////////////////////////////////////////
    N = int(input())
    visited = [[False] * N for _ in range(N)]
    heights = [list(map(int, input().split())) for _ in range(N)]
    
    print(f"#{test_case} {bfs()}")