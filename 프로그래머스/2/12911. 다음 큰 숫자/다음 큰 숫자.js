function solution(n) {
    let number = n;
    let cnt1 = n.toString(2).split("").map(Number).filter((item) => item === 1).length;
    let cnt2 = 0;
    
    while (true) {
        number += 1;
        cnt2 = number.toString(2).split("").map(Number).filter((item) => item === 1).length;
        
        if (cnt1 === cnt2) break;
    }
    
    return number;
}