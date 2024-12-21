function solution(price, money, count) {
    var answer = -1;
    let cost = 0;
    
    for (let i = 1; i <= count; i++) {
        cost += price * i;
    }
    
    answer = cost - money > 0 ? cost - money : 0

    return answer;
}