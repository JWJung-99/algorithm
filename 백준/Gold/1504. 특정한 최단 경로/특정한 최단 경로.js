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

let [N, E] = input[0].split(' ').map(Number);
let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= E; i++) {
	let [a, b, c] = input[i].split(' ').map(Number);

	graph[a].push([b, c]);
	graph[b].push([a, c]);
}

let [v1, v2] = input[E + 1].split(' ').map(Number);

const INF = 1e9;

function dijkstra(start) {
	let queue = new PriorityQueue();

	queue.insert(start, 0);
	distance[start] = 0;

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

// 1에서 v1 or v2로 가는 최단 경로
let distance = Array(N + 1).fill(INF);
dijkstra(1);
let distance_1_to_v1 = distance[v1];
let distance_1_to_v2 = distance[v2];

// v1에서 v2 or N으로 가는 최단 경로
distance = Array(N + 1).fill(INF);
dijkstra(v1);
let distance_v1_to_v2 = distance[v2];
let distance_v1_to_N = distance[N];

// v2에서 v1 or N으로 가는 최단 경로
distance = Array(N + 1).fill(INF);
dijkstra(v2);
let distance_v2_to_v1 = distance[v1];
let distance_v2_to_N = distance[N];

let answer = Math.min(
    // 1 -> v1 -> v2 -> N
	distance_1_to_v1 + distance_v1_to_v2 + distance_v2_to_N,
    // 1 -> v2 -> v1 -> N
	distance_1_to_v2 + distance_v2_to_v1 + distance_v1_to_N
);

if (answer >= INF) console.log(-1);
else console.log(answer);