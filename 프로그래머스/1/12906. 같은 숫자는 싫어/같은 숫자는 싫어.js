function solution(arr) {
    var answer = [];

    for (let item of arr) {
        if (item === answer[answer.length - 1]) {
            continue;
        }
        
        answer.push(item);
    }
    
    return answer;
}