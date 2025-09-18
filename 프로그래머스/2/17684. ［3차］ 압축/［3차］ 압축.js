function solution(msg) {
	let answer = [];

	// 사전 초기화
	let dictionary = {};
	for (let i = 65; i <= 90; i++) {
		dictionary[String.fromCharCode(i)] = i - 64;
	}
	let lastIndex = 27;

	//
	let pointer = 0;
	let chars = msg[pointer];
	let result = 0;
	while (pointer < msg.length) {
		if (dictionary[chars]) {
			result = dictionary[chars];
			chars += msg[++pointer];
		} else {
			dictionary[chars] = lastIndex++;
			answer.push(result);
			result = 0;
			chars = msg[pointer];
		}
	}

	answer.push(result);

	return answer;
}