# DP 사용 : 실행시간 67ms, 메모리 53632kb
T = int(input())

for test_case in range(1, T + 1):
  N = int(input())
  arr = []
  for i in range(N):
      arr.append(list(map(int, input().split())))
    
  dp = []
  for i in range(N):
      dp.append([0] * N)
    
  dp[0][0] = arr[0][0]
    
  for x in range(1, N):
      dp[x][0] = dp[x - 1][0] + arr[x][0]
    
  for y in range(1, N):
      dp[0][y] = dp[0][y - 1] + arr[0][y]
    
  for x in range(1, N):
      for y in range(1, N):
          dp[x][y] = arr[x][y] + min(dp[x - 1][y], dp[x][y - 1])
    
  print(f"#{test_case} {dp[N - 1][N - 1]}")

# DFS 사용 : 실행시간 192ms, 메모리 62848kb
T = int(input())
 
def dfs(x, y, ans):
  global min_result
    
  if  x < 0 or x >= N or y < 0 or y >= N:
      return
    
  if (x == N - 1 and y == N - 1):
      ans += arr[N-1][N-1]
      if min_result > ans:
          min_result = ans
          return
    
  if ans > min_result:
      return
    
  # 오른쪽으로 이동
  if y + 1 < N:
      dfs(x, y + 1, ans + arr[x][y])
    
  # 아래쪽으로 이동
  if x + 1 < N:
      dfs(x + 1, y, ans + arr[x][y])

for test_case in range(1, T + 1):
    N = int(input())
    arr = []
    for i in range(N):
        arr.append(list(map(int, input().split())))
        
    min_result = 10 * (2 * N - 2)
    dfs(0, 0, 0)
    print(f"#{test_case} {min_result}")