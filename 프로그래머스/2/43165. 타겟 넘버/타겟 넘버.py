selected = []

def solution(numbers, target):    
    def dfs(currentValue, depth):  
        if depth == len(numbers):
            selected.append(currentValue)
            return
        
        for oper in ['+', '-']:
            if oper == '+':
                dfs(currentValue + numbers[depth] * 1, depth + 1)
            else:
                dfs(currentValue - numbers[depth] * 1, depth + 1)
                
    dfs(0, 0)
    answer = selected.count(target)
    
    return answer