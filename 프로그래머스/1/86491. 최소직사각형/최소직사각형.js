function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let [w, h] of sizes) {
        if (h > w) [w, h] = [h, w];
        
        if (maxWidth < w) maxWidth = w;
        if (maxHeight < h) maxHeight = h;
    }
    
    return maxWidth * maxHeight;
}