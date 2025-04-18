from collections import deque

def replaceChar(word, index):
    s = list(word)
    s[index] = 'X'
    return "".join(s)

def solution(begin, target, words):
    if target not in words:
        return 0
        
    wordList = {}
    for word in words:
        wordList[word] = 0
    
    def bfs():
        queue = deque([begin])
        wordList[begin] = 0
        
        while queue:
            cur = queue.popleft()
            
            for word in words:
                if word == begin:
                    continue
                
                for i in range(len(cur)):
                    if (replaceChar(cur, i) != replaceChar(word, i)):
                        continue
                    
                    if wordList[word] == 0 or wordList[word] > wordList[cur] + 1:
                        wordList[word] = wordList[cur] + 1     
                        queue.append(word)
                        
    bfs()

    answer = wordList[target]
    return answer