function solution(n, costs) {
	// 1. 다리 건설 비용을 오름차순 정렬
	costs.sort((a, b) => a[2] - b[2]);

	// 2. 부모 배열 초기화
	let parent = Array.from({ length: n }, (_, i) => i);

	// Find: 각 섬의 부모를 찾는 함수
	function Find(node) {
		if (parent[node] === node) return node;
		else return (parent[node] = Find(parent[node]));
	}

	// Union: 두 섬의 부모를 하나로 합치는 함수
	function Union(a, b) {
		const parentA = Find(a);
		const parentB = Find(b);

		if (parentA < parentB) parent[parentB] = parentA;
		else parent[parentA] = parentB;
	}

	// hasCycle: 사이클이 있는지 판단하는 함수
	function hasCycle(a, b) {
		const parentA = Find(a);
		const parentB = Find(b);

		if (parentA === parentB) return true;
		else return false;
	}

	// 3. 간선을 순회하며 최소신장트리 탐색
	let answer = 0;

	for (let [from, to, cost] of costs) {
		if (!hasCycle(from, to)) {
			answer += cost;
			Union(from, to);
		}
	}

	return answer;
}