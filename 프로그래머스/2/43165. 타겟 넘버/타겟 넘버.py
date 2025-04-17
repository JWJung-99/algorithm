answer = 0

def dfs(numbers, target, currentValue, depth): 
    global answer
    if depth == len(numbers):
        if currentValue == target:
            answer += 1
        return

    for oper in ['+', '-']:
        if oper == '+':
            dfs(numbers, target, currentValue + numbers[depth] * 1, depth + 1)
        else:
            dfs(numbers, target, currentValue - numbers[depth] * 1, depth + 1)

def solution(numbers, target):    
    dfs(numbers, target, 0, 0)
    
    return answer