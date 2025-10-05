function solution(n) {
    var answer = 0;
    
    if (n % 2 === 0) {
        for (let i = 1; i <= parseInt(n / 2); i++) {
            answer += Math.pow(i * 2, 2);
        }
    } else {
        for (let i = 1; i <= n; i += 2) {
            answer += i;
        }
    }
    
    return answer;
}