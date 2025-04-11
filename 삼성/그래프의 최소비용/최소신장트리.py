def Find(n):
    if parents[n] != n:
        parents[n] = Find(parents[n])
    return parents[n]
 
def Union(a, b):
    a = Find(a)
    b = Find(b)
     
    if a < b:
        parents[b] = a
    else:
        parents[a] = b
 
T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    # ///////////////////////////////////////////////////////////////////////////////////
    V, E = map(int, input().split())
     
    # 간선 데이터 오름차순 정렬
    edges = []
    for i in range(E):
        n1, n2, w = list(map(int, input().split()))
        edges.append((n1, n2, w))
    edges.sort(key=lambda x: x[2])
 
    parents = [0] * (V + 1)
    for i in range(1, V + 1):
        parents[i] = i
     
    result = 0
    for edge in edges:
        n1, n2, w = edge
         
        # 같으면 사이클이 존재
        if Find(n1) != Find(n2):
            Union(n1, n2)
            result += w
         
    print(f"#{test_case} {result}")  