function solution(want, number, discount) {
    let answer = 0;
    
    function checkIsAble(obj) {
        let isAble = true;
    
        for (let i = 0; i < want.length; i++) {
            if (obj[want[i]] !== number[i]) {
                isAble = false;
                break;
            }
        }
        
        return isAble;
    }
    
    let goods = {};
    
    for (let i = 0; i < 10; i++) {
        if (goods[discount[i]]) {
            goods[discount[i]]++;
        } else {
            goods[discount[i]] = 1;
        }
    }
    
    
    if (checkIsAble(goods)) answer++;
    
    for (let i = 1; i < discount.length - 9; i++) {
        goods[discount[i - 1]]--;
        
        if (goods[discount[i + 9]]) {
            goods[discount[i + 9]]++;
        } else {
            goods[discount[i + 9]] = 1;
        }
        
        
        if (checkIsAble(goods)) answer++;
    }
    
    return answer;
}