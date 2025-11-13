// 1. BFS - O(N²)
function solution1(book_time) {
	let N = book_time.length;
	let arr = book_time
		.map(([start, end]) => {
			const [sh, sm] = start.split(':').map(Number);
			const [eh, em] = end.split(':').map(Number);

			return [sh * 60 + sm, eh * 60 + em];
		})
		.sort((a, b) => a[0] - b[0]);

	let visited = Array(N).fill(false);

	function BFS(index) {
		visited[index] = true;
		let queue = [];
		queue.push([arr[index], index]);

		while (queue.length) {
			let [prevTime, prevIndex] = queue.shift();

			for (let i = prevIndex + 1; i < N; i++) {
				if (visited[i]) continue;

				let prevEnd = prevTime[1];
				let newStart = arr[i][0];

				if (newStart >= prevEnd + 10) {
					visited[i] = true;
					queue.push([arr[i], i]);
					break;
				}
			}
		}
	}

	let answer = 0;
	for (let i = 0; i < N; i++) {
		if (!visited[i]) {
			answer++;
			BFS(i);
		}
	}

	return answer;
}

// 2. 우선순위 큐 이용 - O(N log N)
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

function solution2(book_time) {
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
		// 가장 빨리 퇴실하는 방을 우선순위 큐로 관리 -> 새 예약 입실 시간과 비교
		if (!queue.isEmpty() && queue.peek() + 10 <= start) {
			queue.delete();
		}
		queue.insert(end);
	}

	return queue.size();
}
