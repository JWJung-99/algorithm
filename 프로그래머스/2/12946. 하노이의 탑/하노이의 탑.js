function solution(n) {
    let answer = [];
    
    function Hanoi(num, from, via, to) {
        if (num === 0) {
            return;
        } else {
            Hanoi(num - 1, from, to, via);
            answer.push([from, to]);
            Hanoi(num - 1, via, from, to);
        }
    }
    
    Hanoi(n, 1, 2, 3)
    
    return answer;
}