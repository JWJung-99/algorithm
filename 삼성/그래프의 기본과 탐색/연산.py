from collections import deque

def bfs(start, end):
    queue = deque([(start, 0)])
    visited = [False] * 1000001
    visited[start] = True
    
    while len(queue):
        current_value, current_cnt = queue.popleft()

        if current_value == end:
            return current_cnt
        
        # 가능한 모든 이동
        next_values = [
            current_value + 1,
            current_value - 1,
            current_value * 2,
            current_value - 10
        ]
        
        for next_value in next_values:
            if 0 < next_value <= 1000000 and not visited[next_value]:
                queue.append((next_value, current_cnt + 1))
                visited[next_value] = True
    
    
T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    # ///////////////////////////////////////////////////////////////////////////////////
    N, M = map(int, input().split())
   
    print(f"#{test_case} {bfs(N, M)}")    