function solution(cacheSize, cities) {
    let answer = 0;
    let cache = Array(cacheSize).fill('');
    
    // 캐시의 크기가 0이면 항상 cache miss
    if (cacheSize === 0) return cities.length * 5;

    cities.forEach((city) => {
        city = city.toLowerCase();
        
        let index = cache.indexOf(city);
        
        // 캐시에 없다면
        if (index === -1) {
            // 캐시에서 가장 오래된 원소를 제거하고 city를 캐시에 추가
            answer += 5;
            cache.shift();
        }
        // 캐시에 있다면
        else {
            // city를 캐시의 가장 최근 원소로
            answer += 1;
            cache.splice(index, 1);
        }
        
        cache.push(city);
    });
    
    return answer;
}