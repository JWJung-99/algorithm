function solution(routes) {
    let answer = 0;
    
    routes.sort((a, b) => a[1] - b[1]); 
    
    let out = -30001;
    
    for (let [carIn, carOut] of routes) {
        // 앞 차량이 나간 후 다음 차량이 진입할 경우 카메라 추가
        if (carIn > out) {
            answer++;
            out = carOut;
        }
    }
    
    return answer;
}