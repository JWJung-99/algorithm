function isRightString(arr) {
    let stack = [];
    let map = {')': '(', '}': '{', ']': '['};

    for (let item of arr) {
        if (item === '(' || item === '[' || item === '{') {
            stack.push(item);
        } else {
            if (stack.length === 0) return false;
            
            if (map[item] !== stack.pop()) return false;
        }
    }
    
    return stack.length === 0;
}

function solution(s) {
    let answer = 0;
    
    let arr = s.split('');
    
    for (let i = 0; i < arr.length; i++) {
        if (isRightString(arr)) answer++;
        
        let tmp = arr.shift();
        arr.push(tmp);
    }
    
    return answer;
}