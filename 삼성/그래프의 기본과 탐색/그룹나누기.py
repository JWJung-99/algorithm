T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.

def Find(n):
    if parent[n] != 0:
        return Find(parent[n])
    return n

def Union(a, b):
    a = Find(a)
    b = Find(b)
    
    if a < b:
        parent[b] = a
    else:
        parent[a] = b
    
for test_case in range(1, T + 1):
    # ///////////////////////////////////////////////////////////////////////////////////
    N, M = map(int, input().split())
    votes = list(map(int, input().split()))
    parent = [0] * (N + 1)
    
    for i in range(0, M * 2, 2):
        if Find(votes[i]) != Find(votes[i + 1]):
            Union(votes[i], votes[i + 1])
    
    print(f"#{test_case} {parent.count(0) - 1}")