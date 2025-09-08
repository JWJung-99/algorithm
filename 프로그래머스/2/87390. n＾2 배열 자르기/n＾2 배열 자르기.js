function solution(n, left, right) {
    var answer = [];
    
    while (left <= right) {
        // 2차원 배열의 값: 행, 열 중 큰 값 + 1
        answer.push(Math.max(parseInt(left / n), left % n) + 1);
        left++;
    }
    
    return answer;
}