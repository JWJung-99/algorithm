function getGCD(num1, num2) {
	return num2 > 0 ? getGCD(num2, num1 % num2) : num1;
}

function solution(w, h) {
	const GCD = getGCD(w, h);
	const [minW, minH] = [parseInt(w / GCD), parseInt(h / GCD)];
	const ratio = minH / minW;

	let cnt = 0;
	let height = 0;
	for (let i = 1; i <= minW; i++) {
		cnt += Math.ceil(ratio * i) - height;
		height = Math.floor(ratio * i);
	}

	return w * h - cnt * GCD;
}