function solution(s){
    var answer = true;
    let count = 0;
    
    for (let c of s) {
        if (count < 0) return false;
        
        if (c === '(') count += 1;
        else count -= 1;
    }
    
    if (count !== 0) return false;
    
    return answer;
}