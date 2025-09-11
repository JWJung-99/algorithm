function solution(str1, str2) {    
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();

    let union = [];
    let intersection = [];
    
    let str1_map = new Map();
    
    for (let i = 0; i < str1.length - 1; i++) {
        if ((str1[i].charCodeAt() >= 65 && str1[i].charCodeAt() <= 90) && (str1[i + 1].charCodeAt() >= 65 && str1[i + 1].charCodeAt() <= 90)) {
            let element = str1[i] + str1[i + 1];
            union.push(element);
            str1_map.set(element, str1_map.get(element) ? str1_map.get(element) + 1 : 1);
        }
    }
    
    for (let i = 0; i < str2.length - 1; i++) {
        if ((str2[i].charCodeAt() >= 65 && str2[i].charCodeAt() <= 90) && (str2[i + 1].charCodeAt() >= 65 && str2[i + 1].charCodeAt() <= 90)) {
            let element = str2[i] + str2[i + 1];
            
            if (str1_map.get(element)) {
                intersection.push(element);
                str1_map.set(element, str1_map.get(element) - 1);
            } else {
                union.push(element);
            }
        }
    }
    
    if (union.length === 0 && intersection.length === 0) return 1 * 65536;
    
    return Math.floor((intersection.length / union.length) * 65536);
}