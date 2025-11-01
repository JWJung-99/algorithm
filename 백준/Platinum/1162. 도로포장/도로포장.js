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

	insert(node, priority, cnt) {
		this.heap.push([node, priority, cnt]);
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

const INF = 1e17;

let [N, M, K] = input[0].split(' ').map(Number);
let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
	let [x, y, time] = input[i].split(' ').map(Number);
	graph[x].push([y, time]);
	graph[y].push([x, time]);
}

let distance = Array.from({ length: N + 1 }, () => Array(K + 1).fill(INF));
distance[1][0] = 0;

let queue = new PriorityQueue();
queue.insert(1, 0, 0);

while (!queue.isEmpty()) {
	let [curCity, curTime, pavedCnt] = queue.delete();

	if (distance[curCity][pavedCnt] < curTime) continue;

	for (let [nextCity, nextTime] of graph[curCity]) {
		let time = curTime + nextTime;

		// 1) 포장하지 않는 경우
		if (time < distance[nextCity][pavedCnt]) {
			distance[nextCity][pavedCnt] = time;
			queue.insert(nextCity, time, pavedCnt);
		}

		// 2) 포장하는 경우
		if (pavedCnt < K && curTime < distance[nextCity][pavedCnt + 1]) {
			distance[nextCity][pavedCnt + 1] = curTime;
			queue.insert(nextCity, curTime, pavedCnt + 1);
		}
	}
}

console.log(Math.min(...distance[N]));