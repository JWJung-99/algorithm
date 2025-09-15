function solution(operations) {
    let queue = [];    
    
    function operation(oper, num) {
        switch(oper) {
            case 'I':
                queue.push(num);
                break;
            case 'D':
                if (num === 1) queue.splice(queue.indexOf(Math.max(...queue)), 1);
                else queue.splice(queue.indexOf(Math.min(...queue)), 1);
        }
    }
    
    for (let command of operations) {
        let [oper, num] = command.split(' ');
        operation(oper, +num);
    }
    
    if (queue.length) {
        return [Math.max(...queue), Math.min(...queue)];
    } else return [0, 0];
}