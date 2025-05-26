function solution(n) {
    let ans = 1;
    
    while (n > 1) {        
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = (n - 1) / 2;
            ans++;
        }
    }
    
    return ans;
}