class PriorityQueue {
	constructor() {
		this.heap = [];
	}

	isEmpty() {
		return this.heap.length === 0;
	}

	size() {
		return this.heap.length;
	}

	peek() {
		return this.heap[0] || null;
	}

	swap(idx1, idx2) {
		[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
	}

	insert(time) {
		this.heap.push(time);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.heap.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);

		while (
			this.heap[parentIndex] &&
			this.heap[index] < this.heap[parentIndex]
		) {
			this.swap(index, parentIndex);
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
	}

	delete() {
		if (this.isEmpty()) return null;

		let rootNode = this.heap[0];
		let lastNode = this.heap.pop();

		if (!this.isEmpty()) {
			this.heap[0] = lastNode;
			this.bubbleDown();
		}

		return rootNode;
	}

	bubbleDown() {
		let index = 0;
		let leftIndex = index * 2 + 1;
		let rightIndex = index * 2 + 2;

		while (
			(this.heap[leftIndex] && this.heap[leftIndex] < this.heap[index]) ||
			(this.heap[rightIndex] && this.heap[rightIndex] < this.heap[index])
		) {
			let smallerIndex = leftIndex;
			if (
				this.heap[rightIndex] &&
				this.heap[rightIndex] < this.heap[smallerIndex]
			) {
				smallerIndex = rightIndex;
			}

			this.swap(index, smallerIndex);
			index = smallerIndex;
			leftIndex = index * 2 + 1;
			rightIndex = index * 2 + 2;
		}
	}
}

function solution(book_time) {
	let N = book_time.length;
	let arr = book_time
		.map(([start, end]) => {
			const [sh, sm] = start.split(':').map(Number);
			const [eh, em] = end.split(':').map(Number);

			return [sh * 60 + sm, eh * 60 + em];
		})
		.sort((a, b) => a[0] - b[0]);

	let queue = new PriorityQueue();

	for (let [start, end] of arr) {
		if (!queue.isEmpty() && queue.peek() + 10 <= start) {
			queue.delete();
		}
		queue.insert(end);
	}

	return queue.size();
}