function solution(arrayA, arrayB) {
    let answer = 0;

    let [gcdA, gcdB] = [arrayA[0], arrayB[0]];
    
    let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
    
    // 최대공약수 계산
    for (let i = 0; i < arrayA.length; i++) {
        gcdA = getGCD(gcdA, arrayA[i]);
        gcdB = getGCD(gcdB, arrayB[i])
    }
    
    if (gcdA === 1) gcdA = 0;
    if (gcdB === 1) gcdB = 0;
    
    if (arrayA.every((num) => num % gcdB !== 0)) answer = Math.max(answer, gcdB);
    if (arrayB.every((num) => num % gcdA !== 0)) answer = Math.max(answer, gcdA);
    
    return answer;
}