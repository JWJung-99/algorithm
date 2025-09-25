function solution(files) {
    let arr = [];
    
    for (let file of files) {
        let HEAD = '';
        let NUMBER = '';
        
        for (let char of file) {
            if (char >= '0' && char <= '9') { 
                // 1. 숫자인 경우
                if (NUMBER.length <= 5) {
                  NUMBER += char; // NUMBER 길이가 5 이하 → 추가
                } else {
                  break; // NUMBER 길이가 6 이상 → TAIL
                }
              } else { 
                // 2. 숫자가 아닌 경우
                if (NUMBER.length === 0) {
                  HEAD += char; // NUMBER가 비어 있으면 HEAD에 추가
                } else {
                  break; // NUMBER에 값이 있으면 -> TAIL
                }
              }
        }
        
        arr.push({file, head: HEAD, number: NUMBER});
    }
    
    return arr.sort((a, b) => {
        const headA = a.head.toLowerCase();
        const headB = b.head.toLowerCase();
        
        if (headA < headB) return -1;
        else if (headA > headB) return 1;
        else return Number(a.number) - Number(b.number);
    }).map(item => item.file);
}