function solution(x, n) {
    var answer = [];
    
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            answer.push(x)
        } else {
            answer.push(answer[i - 1] + x);
        }
    }
    
    return answer;
}