function solution(n, lost, reserve) {
	let arr = Array(n + 1).fill(1);
    
    for (let x of reserve) arr[x] += 1;
	for (let x of lost) arr[x] -= 1;

	let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        if (arr[i] !== 0) answer += 1;
        else {
          if (arr[i - 1] === 2) {
              arr[i] += 1;
              arr[i - 1] -= 1;
              answer += 1;
          } else if (arr[i + 1] === 2) {
              arr[i] += 1;
              arr[i + 1] -= 1;
              answer += 1;
          } 
        }
    }

	return answer;
}