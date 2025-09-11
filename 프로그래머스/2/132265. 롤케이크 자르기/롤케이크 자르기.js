function solution(topping) {
    let answer = 0;
    
    // 첫 번째 시도: Set 활용 -> 시간초과 O(n)
    // for (let i = 1; i <= topping.length; i++) {
    //     if(new Set(topping.slice(0, i)).size === new Set(topping.slice(i)).size) answer++;
    // }
    
    // 두 번째 시도: 해시 테이블
    let topping_cs = new Map();
    let topping_br = new Set();
    
    let type_cs = 0;
    
    for (let x of topping) {
        if (topping_cs.get(x)) {
            topping_cs.set(x, topping_cs.get(x) + 1);
        } else {
            type_cs++;
            topping_cs.set(x, 1)
        }
    }
    
    for (let i = topping.length - 1; i >= 0; i--) {
        // 철수가 topping[i]를 몇 개 가지고 있는지
        let quantity = topping_cs.get(topping[i]);
        
        // 동생에게 주면 더 이상 해당 종류의 토핑이 없을 때
        if (quantity === 1) type_cs--;
        topping_cs.set(topping[i], quantity - 1);
        
        // 동생에게 해당 종류의 토핑 추가
        topping_br.add(topping[i]);
        
        if (type_cs === topping_br.size) answer++;
    }

    return answer;
}