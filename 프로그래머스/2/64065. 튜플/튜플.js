function solution(s) {
    let answer = new Set();
    
    const tuples = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort((a, b) => a.length - b.length);
    
    for (let element of tuples) {
        for (let num of element) {
            if (answer.has(num)) continue;
            else answer.add(num);
        }
    }
    
    return [...answer];
}