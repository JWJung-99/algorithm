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

function solution1(n, k) {
	let answer = 0;

	console.log(n.toString(k));
	let arr = n.toString(k).split(0);

	for (let element of arr) {
		if (isPrime(Number(element))) answer++;
	}

	return answer;
}

console.log(solution1(437674, 3));
console.log(solution1(110011, 10));
console.log(isPrime(1));
