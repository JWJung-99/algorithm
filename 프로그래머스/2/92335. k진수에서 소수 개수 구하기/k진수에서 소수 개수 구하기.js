function isPrime(num) {
	if (num <= 1) return false;
	if (num === 2) return true;

	for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
		if (num % i === 0) {
			return false;
		}
	}

	return true;
}

function solution(n, k) {
    let answer = 0;

	let arr = n.toString(k).split(0);

	for (let element of arr) {
		if (isPrime(Number(element))) answer++;
	}

	return answer;
}