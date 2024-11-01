function solution(babbling) {
    var answer = 0;
    const words = ['aya', 'ye', 'woo', 'ma'];
    
    babbling.forEach(item => {
        
        words.forEach(_ => {
            if (item.includes(_)) {
                item = item.replace(_, "O");
            }
        })
        
        item = item.replace(/O/g, "");
        
        if (item.length === 0) answer++;
    })
    
    return answer;
}