function solution(progresses, speeds) {
    var answer = [];
    
    let queue = [];
    
    for (let i = 0; i < progresses.length; i++) {
        queue.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let index = 1;
    let max = queue[0];
    let count = 1;
    
    while (index < queue.length) {
        if (queue[index] > max) {
            answer.push(count);
            max = queue[index];
            count = 1;
        } else {
            count++;
        }
        
        index++;
    }
    
    answer.push(count);
    
    return answer;
}