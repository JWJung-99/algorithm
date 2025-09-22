function solution(m, n, puddles) {
    let dp = Array.from({length: m}, () => Array(n).fill(0));
    dp[0][0] = 1;
    
    for (let [x, y] of puddles) dp[x - 1][y - 1] = -1;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            if (dp[i][j] === -1) continue;
            
            if (i > 0 && dp[i - 1][j] > 0) dp[i][j] += dp[i - 1][j] % 1000000007;
            if (j > 0 && dp[i][j - 1] > 0) dp[i][j] += dp[i][j - 1] % 1000000007;
        }
    }
    
    return dp[m - 1][n - 1] % 1000000007;
}