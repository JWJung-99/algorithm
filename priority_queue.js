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
