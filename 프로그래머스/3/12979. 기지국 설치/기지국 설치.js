function solution(n, stations, w) {
    let answer = 0;
    let coverage = 2 * w + 1;
    let start = 1;
    
    for (let station of stations) {
        let left = station - w;
        let right = station + w;
        
        // 전파가 도달하지 않을 경우
        if (start < left) {
            answer += Math.ceil((left - start) / coverage);
        }
        
        start = right + 1;
    }
    
    // 마지막 기지국 이후 아파트가 남아 있는 경우
    if (start <= n) answer += Math.ceil((n - start + 1) / coverage);
    
    return answer;
}