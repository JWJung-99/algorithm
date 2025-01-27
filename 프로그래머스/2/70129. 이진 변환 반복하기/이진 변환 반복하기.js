function solution(s) {
    let count = 0;
    let zeros = 0;
    let str = s;
    
    while (1) {
        if (str === "1") break;
        
        let arr = str.split('').map(Number);
        count += 1;
        zeros += arr.filter(_ => _ === 0).length;
        str = arr.filter(_ => _ === 1).length.toString(2);
    }
    
    return [count, zeros];
}