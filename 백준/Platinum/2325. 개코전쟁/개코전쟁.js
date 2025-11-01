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

const INF = 1e9;
let [N, M] = input[0].split(' ').map(Number);
let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
	let [x, y, z] = input[i].split(' ').map(Number);
	graph[x].push([y, z]);
	graph[y].push([x, z]);
}

let distance = Array(N + 1).fill(INF);

function dijkstra(a, b) {
	distance[1] = 0;

	let queue = new PriorityQueue();
	queue.insert(1, 0);

	while (!queue.isEmpty()) {
		let [curNode, curDist] = queue.delete();

		if (distance[curNode] < curDist) continue;

		for (let x of graph[curNode]) {
			if (curNode === a && x[0] === b) continue;
			else if (curNode === b && x[0] === a) continue;

			let dist = curDist + x[1];

			if (dist < distance[x[0]]) {
				distance[x[0]] = dist;
				queue.insert(x[0], dist);
			}
		}
	}
}

// 다익스트라 1회 실행 -> 1 ~ N까지 최단거리 계산
dijkstra(-1, -1);

function BFS() {
	let queue = [];
	let visited = new Set();

	queue.push(N);
	let removes = [];

	while (queue.length) {
		let curNode = queue.shift();
		if (curNode === 1) continue;

		for (let x of graph[curNode]) {
			let cost = distance[x[0]] + x[1];

			if (cost === distance[curNode]) {
				removes.push([x[0], curNode]);

				if (!visited.has(x[0])) {
					visited.add(x[0]);
					queue.push(x[0]);
				}
			}
		}
	}

	return removes;
}

let removes = BFS();

let answer = 0;
for (let [a, b] of removes) {
	distance = Array(N + 1).fill(INF);
	dijkstra(a, b);
	answer = Math.max(answer, distance[N]);
}
console.log(answer);