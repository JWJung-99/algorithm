function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = Array.from({ length: bridge_length }, () => 0);
    let bridge_weight = 0;
    
    // 1초에 첫 번째 트럭 건너기 시작
    answer++;
    bridge.shift();
    bridge_weight += truck_weights.shift();
    bridge.push(bridge_weight);
    
    while (bridge_weight > 0) {
        answer++;
        bridge_weight -= bridge.shift();
        
        // 다음 트럭이 건널 수 있다면 bridge에 추가
        if (bridge_weight + truck_weights[0] <= weight) {
            bridge_weight += truck_weights[0];
            bridge.push(truck_weights.shift());
        } 
        // 건널 수 없다면 대기
        else {
            bridge.push(0);
        }
    }

    return answer;
}