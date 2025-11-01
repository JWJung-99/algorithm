export default class PriorityQueue {
	constructor() {
		this.heap = [];
	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	swap(idx1, idx2) {
		[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
	}

	insert(node, priority) {
		this.heap.push({ node, priority });
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.size() - 1;
		let parentIdx = Math.floor((idx - 1) / 2);

		while (
			this.heap[parentIdx] &&
			this.heap[idx].priority < this.heap[parentIdx].priority
		) {
			this.swap(idx, parentIdx);
			idx = parentIdx;
			parentIdx = Math.floor((idx - 1) / 2);
		}
	}

	delete() {
		if (this.isEmpty()) return null;
		if (this.size() === 1) return this.heap[0];

		const value = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.bubbleDown();
		return value;
	}

	bubbleDown() {
		let idx = 0;
		let leftIdx = idx * 2 + 1;
		let rightIdx = idx * 2 + 2;

		while (
			(this.heap[leftIdx] &&
				this.heap[leftIdx].priority < this.heap[idx].priority) ||
			(this.heap[rightIdx] &&
				this.heap[rightIdx].priority < this.heap[idx].priority)
		) {
			let smallerIdx = leftIdx;

			if (
				this.heap[rightIdx] &&
				this.heap[rightIdx].priority < this.heap[smallerIdx].priority
			)
				smallerIdx = rightIdx;

			this.swap(idx, smallerIdx);
			idx = smallerIdx;
			leftIdx = idx * 2 + 1;
			rightIdx = idx * 2 + 2;
		}
	}
}
