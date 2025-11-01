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

let [V, E] = input[0].split(' ').map(Number);
let K = Number(input[1]);

let graph = Array.from({ length: V + 1 }, () => []);
for (let i = 2; i <= E + 1; i++) {
	let [from, to, cost] = input[i].split(' ').map(Number);
	graph[from].push([to, cost]);
}

let distance = Array(V + 1).fill(INF);

let queue = new PriorityQueue();
queue.insert(K, 0);
distance[K] = 0;

while (!queue.isEmpty()) {
	let [node, dist] = queue.delete();

	if (distance[node] < dist) continue;

	for (let x of graph[node]) {
		let cost = dist + x[1];

		if (cost < distance[x[0]]) {
			distance[x[0]] = cost;
			queue.insert(x[0], cost);
		}
	}
}

for (let i = 1; i <= V; i++) {
	if (distance[i] === INF) console.log('INF');
	else console.log(distance[i]);
}