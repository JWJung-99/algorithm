function solution(numbers) {
    let answer = [];
    
    for (let number of numbers) {
        if (number % 2 === 0) {
            answer.push(number + 1);
        } else {
            let binary = '0' + number.toString(2);
            
            for (let i = binary.length - 1; i >= 0; i--) {
                if (binary[i] === '0') {
                    answer.push(parseInt(binary.substring(0, i) + '10' + binary.substring(i + 2), 2)); 
                    break;
                }
            }
        }
    }
    
    return answer;
}