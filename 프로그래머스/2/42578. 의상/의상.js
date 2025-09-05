function solution(clothes) {
    var answer = 1;
    
    let map = {};
    
    for (let [cloth, type] of clothes) {
        if (map[type]) map[type]++;
        else map[type] = 1;
    }
    
    for (let type in map) {
        answer *= map[type] + 1;
    }
    
    return answer - 1;
}