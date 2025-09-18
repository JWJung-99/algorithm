function solution(msg) {
	let answer = [];

	// 사전 초기화
	let dictionary = {};
	for (let i = 65; i <= 90; i++) {
		dictionary[String.fromCharCode(i)] = i - 64;
	}
	let lastIndex = 27;

	// 메시지 압축 - 첫 번째 글자부터 시작
	let pointer = 0;
	let chars = msg[pointer];
	let result = 0;
	while (pointer < msg.length) {
        // 사전에 chars가 있다면 result 값 업데이트, chars에 다음 글자 추가
		if (dictionary[chars]) {
			result = dictionary[chars];
			chars += msg[++pointer];
		}
        // 사전에 chars가 없다면 추가, answer에 result 값 추가, result 초기화, chars를 다음 위치로 업데이트
        else {
			dictionary[chars] = lastIndex++;
			answer.push(result);
			result = 0;
			chars = msg[pointer];
		}
	}

    // answer에 마지막 result 값 추가
	answer.push(result);

	return answer;
}