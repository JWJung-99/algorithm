class minHeap {
	constructor() {
		this.heap = [];
	}

	size() {
		return this.heap.length;
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

	insert(x) {
		this.heap.push(x);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.heap.length - 1;
		let parentIndex = parseInt((index - 1) / 2);

		while (
			this.heap[parentIndex] &&
			this.heap[index] < this.heap[parentIndex]
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

		if (!this.isEmpty()) {
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
				this.heap[leftIndex] < this.heap[smallestIndex]
			)
				smallestIndex = leftIndex;

			if (
				this.heap[rightIndex] &&
				this.heap[rightIndex] < this.heap[smallestIndex]
			)
				smallestIndex = rightIndex;

			if (smallestIndex === index) break;

			this.swap(index, smallestIndex);
			index = smallestIndex;
		}
	}
}

function solution(n, k, enemy) {
	let heap = new minHeap();

	for (let i = 0; i < enemy.length; i++) {
		heap.insert(enemy[i]);

		if (heap.size() > k) {
			let min = heap.delete();
			n -= min;
		}

		if (n < 0) return i;
	}

	return enemy.length;
}