function solution(players, m, k) {
	let servers = Array(24).fill(0);
	let answer = 0;

	players.forEach((player, index) => {
		// 서버 증설
		if (parseInt(player / m) > servers[index]) {
			let requiredServers = parseInt(player / m) - servers[index];

			for (let i = 0; i < k; i++) {
				if (index + i < 24) servers[index + i] += requiredServers;
			}

			answer += requiredServers;
		}
	});

	return answer;
}