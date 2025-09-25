function solution(n, s) {
    var answer = [];
    
    let q = parseInt(s / n);
    let r = s % n;
    
    if (q === 0) return [-1];
    
    while (n > 0) {
        let num = q;
        
        if (r > 0) {
            num += 1;
            r -= 1;
        }
        
        answer.push(num);
        n--;
    }
    
    return answer.sort((a, b) => a - b);
}