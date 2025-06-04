import math

def solution(progresses, speeds):
    result = []
    
    arr = []
    time = 0
    cnt = 0
    
    while len(progresses) > 0:
        # 작업이 완료되었다면
        if (progresses[0] + time * speeds[0]) >= 100:
            progress = progresses.pop(0)
            speed = speeds.pop(0)
            cnt += 1
        else:
            # 완성된 기능이 있다면 배포
            if cnt > 0:
                result.append(cnt)
                cnt = 0
            
            time += 1
    
    result.append(cnt)
    
    return result