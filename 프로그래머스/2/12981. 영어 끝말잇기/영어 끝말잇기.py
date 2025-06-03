def solution(n, words):
    num = 0
    dic = {words[0]: 1}
    
    for i in range(1, len(words)):
        if words[i - 1][-1] != words[i][0]:
            num = i
            break
        
        if words[i] in dic.keys():
            num = i
            break
        
        dic[words[i]] = 1
    
    result = []
    
    if num == 0:
        result = [0, 0]
    else:
        num = num + 1

        if num % n > 0:
            result = [num % n, int(num / n) + 1]
        else:
            result = [n, int(num / n)]
        
    return result