let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class PriorityQueue {
	constructor() {
		this.heap = [];
	}

	isEmpty() {
		return this.heap.length === 0;
	}

	swap(idx1, idx2) {
		[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
	}

	insert(node, priority) {
		this.heap.push([node, priority]);
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.heap.length - 1;
		let parentIdx = Math.floor((idx - 1) / 2);

		while (
			this.heap[parentIdx] &&
			this.heap[idx][1] < this.heap[parentIdx][1]
		) {
			this.swap(idx, parentIdx);
			idx = parentIdx;
			parentIdx = Math.floor((idx - 1) / 2);
		}
	}

	delete() {
		if (this.isEmpty()) return null;

		const rootNode = this.heap[0];
		const lastNode = this.heap.pop();

		if (this.heap.length > 0) {
			this.heap[0] = lastNode;
			this.bubbleDown();
		}

		return rootNode;
	}

	bubbleDown() {
		let idx = 0;
		let leftIdx = idx * 2 + 1;
		let rightIdx = idx * 2 + 2;

		while (
			(this.heap[leftIdx] && this.heap[leftIdx][1] < this.heap[idx][1]) ||
			(this.heap[rightIdx] && this.heap[rightIdx][1] < this.heap[idx][1])
		) {
			let smallerIdx = leftIdx;

			if (
				this.heap[rightIdx] &&
				this.heap[rightIdx][1] < this.heap[smallerIdx][1]
			)
				smallerIdx = rightIdx;

			this.swap(idx, smallerIdx);
			idx = smallerIdx;
			leftIdx = idx * 2 + 1;
			rightIdx = idx * 2 + 2;
		}
	}
}

let index = 0;

while (true) {
	let [N, M] = input[index].split(' ').map(Number);
	if (N === 0 && M === 0) break;

	let [S, D] = input[index + 1].split(' ').map(Number);

	let graph = Array.from({ length: N }, () => []);
	let reversed_graph = Array.from({ length: N }, () => []);
	for (let i = index + 2; i <= index + M + 1; i++) {
		let [U, V, P] = input[i].split(' ').map(Number);
		graph[U].push([V, P]);
		reversed_graph[V].push([U, P]);
	}

	function dijkstra() {
		let queue = new PriorityQueue();

		queue.insert(S, 0);
		distance[S] = 0;

		while (!queue.isEmpty()) {
			let [curNode, curDist] = queue.delete();

			if (distance[curNode] < curDist) continue;

			for (let [nextNode, nextDist] of graph[curNode]) {
				let dist = curDist + nextDist;

				if (dist < distance[nextNode]) {
					distance[nextNode] = dist;
					queue.insert(nextNode, dist);
				}
			}
		}
	}

	function BFS() {
		let queue = [];
		let visited = new Set();

		queue.push(D);
		let removes = [];

		while (queue.length) {
			let curNode = queue.shift();
			if (curNode === S) continue;

			for (let [prevNode, prevDist] of reversed_graph[curNode]) {
				let dist = distance[prevNode] + prevDist;
				if (dist === distance[curNode]) {
					removes.push([prevNode, curNode]);

					if (!visited.has(prevNode)) {
						visited.add(prevNode);
						queue.push(prevNode);
					}
				}
			}
		}

		return removes;
	}

	function getNewGraph() {
		let removes = BFS();
		let newGraph = Array.from({ length: N }, () => []);

		for (let i = 0; i < N; i++) {
			for (let [node, dist] of graph[i]) {
				let check = true;
				for (let [x, y] of removes) {
					if (i === x && node === y) check = false;
				}
				if (check) newGraph[i].push([node, dist]);
			}
		}

		return newGraph;
	}

	const INF = 1e9;

	// 최단 경로 계산
	let distance = Array(N).fill(INF);
	dijkstra();

	graph = getNewGraph(S, D);

    // 최단 경로의 간선을 제외하고 다익스트라 실행
	distance = Array(N).fill(INF);
	dijkstra();

	if (distance[D] === INF) console.log(-1);
	else console.log(distance[D]);

	index += M + 2;
}