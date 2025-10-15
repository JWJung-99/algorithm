function solution(number, k) {    
    let stack = [];
    
    for (let i = 0; i < number.length; i++) {
        while (k > 0 && stack.at(-1) < number[i]) {
            k--;
            stack.pop();
        }
        stack.push(number[i]);
    }
    
    return k > 0 ? stack.slice(0, -k).join('') : stack.join('');
}