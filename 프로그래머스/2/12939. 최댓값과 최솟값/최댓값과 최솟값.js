function solution(s) {
    var answer = '';
    
    let arr = s.split(" ").map(Number).sort((a, b) => a - b);
    
    answer += arr[0] + ' ' + arr[arr.length - 1];
    
    return answer;
}