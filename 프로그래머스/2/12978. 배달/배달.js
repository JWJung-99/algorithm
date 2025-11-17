class PriorityQueue {
	constructor() {
		this.heap = [];
	}

	isEmpty() {
		return this.heap.length === 0;
	}

	swap(index1, index2) {
		[this.heap[index1], this.heap[index2]] = [
			this.heap[index2],
			this.heap[index1],
		];
	}

	insert([n, priority]) {
		this.heap.push([n, priority]);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.heap.length - 1;
		let parentIndex = parseInt((index - 1) / 2);

		while (
			parentIndex >= 0 &&
			this.heap[index][1] < this.heap[parentIndex][1]
		) {
			this.swap(index, parentIndex);
			index = parentIndex;
			parentIndex = parseInt((index - 1) / 2);
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
		let index = 0;

		while (true) {
			let leftIndex = index * 2 + 1;
			let rightIndex = index * 2 + 2;

			let smallestIndex = index;

			if (
				this.heap[leftIndex] &&
				this.heap[leftIndex][1] < this.heap[smallestIndex][1]
			) {
				smallestIndex = leftIndex;
			}

			if (
				this.heap[rightIndex] &&
				this.heap[rightIndex][1] < this.heap[smallestIndex][1]
			) {
				smallestIndex = rightIndex;
			}

			if (smallestIndex === index) break;

			this.swap(index, smallestIndex);
			index = smallestIndex;
		}
	}
}

function solution(N, road, K) {
	let graph = Array.from({ length: N + 1 }, () => []);
	for (let [a, b, c] of road) {
		graph[a].push([b, c]);
		graph[b].push([a, c]);
	}

	function Dijkstra() {
		let time = Array(N + 1).fill(500000);
		time[1] = 0;

		let queue = new PriorityQueue();
		queue.insert([1, 0]);

		while (!queue.isEmpty()) {
			let [curNode, curTime] = queue.delete();

			if (time[curNode] < curTime) continue;

			for (let [nextNode, nextTime] of graph[curNode]) {
				let newTime = curTime + nextTime;
				if (newTime < time[nextNode]) {
					time[nextNode] = newTime;
					queue.insert([nextNode, newTime]);
				}
			}
		}

		return time;
	}

	let result = Dijkstra();

	return result.filter((x) => x <= K).length;
}
