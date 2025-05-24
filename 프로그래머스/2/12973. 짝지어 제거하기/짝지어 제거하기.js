function solution(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const curChar = s.charAt(i);
        
        if (stack[stack.length - 1] === curChar) {
            stack.pop();
        } else {
            stack.push(curChar);
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}