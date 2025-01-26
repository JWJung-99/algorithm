function solution(n) {  
    if (Number.isInteger(Math.sqrt(n))) {
        const x = Math.sqrt(n);
        
        return (x + 1) * (x + 1);
    }
    
    return -1;
}