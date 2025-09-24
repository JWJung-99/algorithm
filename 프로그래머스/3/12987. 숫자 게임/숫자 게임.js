function solution(A, B) {
    var answer = 0;
    
    A.sort((a, b) => b - a);
    B.sort((a, b) => a - b);
    
    
    for (let a of A) {
        // 이길 수 있을 때만 출전, 이길 수 없다면 출전 X
        if (a < B[B.length - 1]) {
            B.pop();
            answer++;
        }
    }
    
    return answer;
}