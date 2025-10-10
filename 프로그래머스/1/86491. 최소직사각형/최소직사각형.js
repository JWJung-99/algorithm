function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    for (let card of sizes) {
        let [w, h] = card.sort((a, b) => b - a);
        
        if (maxW < w) maxW = w;
        if (maxH < h) maxH = h;
    }
    
    return maxW * maxH;
}