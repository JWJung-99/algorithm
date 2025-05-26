function solution(arr) {    
    arr.sort((a, b) => a - b);
    
    let curLcm = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= curLcm) {
            curLcm = lcm(curLcm, arr[i])
        } else {
            curLcm = lcm(arr[i], curLcm);
        }
    }
    
    return curLcm;
}

function gcd(num1, num2) {
    if (num1 === 0) return num2;
    return gcd(num2 % num1, num1);
}

function lcm(num1, num2) {
    return (num1 * num2) / gcd(num1, num2);
}