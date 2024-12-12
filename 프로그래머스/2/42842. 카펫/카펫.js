function solution(brown, yellow) {
    var answer = [];
    
    let arr = [];
    for (let i = yellow; i >= Math.sqrt(yellow); i--) {
        if (yellow % i === 0) arr.push(i);
    }
        
    arr.forEach((x) => {
        if (x * 2 + (yellow / x) * 2 + 4 === brown) {
            answer.push(x + 2, (yellow / x) + 2);
        }
    })
    
    return answer;
}