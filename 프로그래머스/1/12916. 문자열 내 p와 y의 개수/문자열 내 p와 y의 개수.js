function solution(s){
    
    let p = 0;
    let y = 0;
    
    s.toLowerCase().split('').forEach((char) => {
        if (char === 'p') p++;
        else if (char === 'y') y++;
    })
    

    return p === y;
}