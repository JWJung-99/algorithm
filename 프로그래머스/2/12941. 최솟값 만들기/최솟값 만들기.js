function solution(A,B){
    var answer = 0;
    
    const a = A.sort((a, b) => a - b);
    const b = B.sort((a, b) => b - a);
    
    for (let i = 0; i < A.length; i++) {
        answer += a[i] * b[i];
    }

    return answer;
}