function solution(sequence) {
    let answer = 0;
    
    let pDP = []; // [1, -1, 1, -1, ...]
    let nDP = []; // [-1, 1, -1, 1, ...]
    
    for (let i = 0; i < sequence.length; i++) {
        if (i === 0) {
            pDP.push(sequence[i]);
            nDP.push(-sequence[i]);
        } else if (i % 2 === 0) {
            pDP.push(Math.max(pDP[i - 1] + sequence[i], sequence[i]));
            nDP.push(Math.max(nDP[i - 1] - sequence[i], -sequence[i]));
        } else { 
            pDP.push(Math.max(pDP[i - 1] - sequence[i], -sequence[i]));
            nDP.push(Math.max(nDP[i - 1] + sequence[i], sequence[i]));
        }
        
        answer = Math.max(answer, pDP[i], nDP[i]);
    }
    
    return answer;
}