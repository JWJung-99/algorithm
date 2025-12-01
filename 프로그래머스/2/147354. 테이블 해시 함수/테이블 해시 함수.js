function solution(data, col, row_begin, row_end) {
    col = col - 1;
    let S_i = 0;
    
    // 1. 테이블의 튜플 정렬
    data.sort((a, b) => {
        if (a[col] === b[col]) return b[0] - a[0];
        else return a[col] - b[col];
    })
    
    // 2. S_i 계산
    for (let i = row_begin; i <= row_end; i++) {
        S_i ^= data[i - 1].reduce((acc, cur) => acc + (cur % i), 0);
    }
    
    return S_i;
}