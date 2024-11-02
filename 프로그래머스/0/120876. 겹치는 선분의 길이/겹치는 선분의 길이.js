function solution(lines) {
    var answer = 0;
    
    let arr = new Array(200).fill(0);
    
    lines.forEach(([a, b]) => {
        for (let i = a + 100; i < b + 100; i++) {
            arr[i]++;
        }
    })
    
    arr.forEach(item => {
        if (item >= 2) answer++;
    })

    
    return answer;
}