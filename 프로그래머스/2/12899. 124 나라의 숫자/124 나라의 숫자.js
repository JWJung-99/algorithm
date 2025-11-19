function solution(n) {
    let arr = [4, 1, 2]
    let result = '';

    while(n) {
        result = arr[n % 3] + result;
        n = parseInt((n - 1) / 3);
    }

    return result;
}