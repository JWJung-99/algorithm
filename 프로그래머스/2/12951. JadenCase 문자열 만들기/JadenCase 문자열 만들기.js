function solution(s) {

    const answer = s.toLowerCase().split(" ").map((item) => 
        item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    ).join(' ');
    
    return answer;
}