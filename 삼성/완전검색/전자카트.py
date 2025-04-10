T = int(input())

def dfs(depth, start, ans):
    global min_result
    
    if depth == N:
        ans += map_list[start][0]
        
        if min_result > ans:
            min_result = ans
            return
    
    if ans > min_result:
        return
    
    for i in range(1, N):
        if visited[i] == True:
            continue
        
        visited[i] = True
        dfs(depth + 1, i, ans + map_list[start][i])
        visited[i] = False

for test_case in range(1, T + 1):
    N = int(input())
    
    # 경로
    map_list = []
    for i in range(N):
        map_list.append(list(map(int, input().split())))
    
    # 방문 여부 확인
    visited = []
    for i in range(N):
        visited.append(False)
    
    min_result = 100 * N
    dfs(1, 0, 0)
    print(f"#{test_case} {min_result}")