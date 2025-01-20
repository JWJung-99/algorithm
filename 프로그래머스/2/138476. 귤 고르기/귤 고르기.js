function solution(k, tangerine) {
    var answer = 0;
    
    const maxIndex = Math.max(...tangerine);
    let arr = Array(maxIndex + 1).fill(0);
    
    tangerine.forEach((size, index) => {
        arr[size] += 1;
    })
    
    arr.sort((a, b) => b - a);
    
    let index = 0;
    while (k > 0) {
        answer++;
        k -= arr[index];
        index++;
    }
    
    return answer;
}