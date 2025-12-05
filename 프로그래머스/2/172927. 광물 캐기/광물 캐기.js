function solution(picks, minerals) {
    const maxMinerals = (picks[0] + picks[1] + picks[2]) * 5;
    minerals = minerals.slice(0, maxMinerals);
    
	// minerals 배열을 5개씩 묶기
	let groups = [];
	for (let i = 0; i < minerals.length; i += 5) {
		groups.push(minerals.slice(i, i + 5));
	}
    
    console.log(groups);

	// 각 그룹의 광물을 캐는데 필요한 최대 피로도 계산(돌 곡괭이 기준) 후 정렬
	let groupInfo = groups
		.map((group) => {
			let [dia, iron, stone] = [0, 0, 0];

			group.forEach((element) => {
				if (element === 'diamond') dia++;
				else if (element === 'iron') iron++;
				else stone++;
			});

			let score = dia * 25 + iron * 5 + stone * 1;

			return [score, dia, iron, stone];
		})
		.sort((a, b) => b[0] - a[0]);

	let answer = 0;
	let index = 0;

    // 가장 피로도가 높은 그룹부터 다이아 곡괭이로
	for (let type = 0; type < 3; type++) {
		while (picks[type] > 0 && index < groupInfo.length) {
			let [score, dia, iron, stone] = groupInfo[index];

			if (type === 0) answer += dia + iron + stone;
			else if (type === 1) answer += dia * 5 + iron + stone;
			else answer += dia * 25 + iron * 5 + stone;

			picks[type]--;
			index++;
		}
	}

	return answer;
}