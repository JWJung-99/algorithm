function solution(numbers) {
    let answer = Array(numbers.length).fill(-1);
    let stack = [];
    
    for (let i = 0; i < numbers.length; i++) {
        while (numbers[i] > numbers[stack.at(-1)]) {
            let index = stack.pop();
            answer[index] = numbers[i];
        }
        
        stack.push(i);
    }
    
    return answer;
}