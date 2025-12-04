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

	compare(task1, task2) {
		// 1. 작업의 소요시간이 짧은 것
		if (task1[1] !== task2[1]) return task1[1] < task2[1];
		// 2. 작업의 요청 시각이 빠른 것
		else return task1[0] < task2[0];
	}

	insert(task) {
		this.heap.push(task);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.heap.length - 1;

		while (index > 0) {
			let parentIndex = parseInt((index - 1) / 2);

			if (this.compare(this.heap[index], this.heap[parentIndex])) {
				this.swap(index, parentIndex);
				index = parentIndex;
			} else break;
		}
	}

	delete() {
		if (this.isEmpty()) return null;
		if (this.heap.length === 1) return this.heap.pop();

		const rootNode = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.bubbleDown();

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
				this.compare(this.heap[leftIndex], this.heap[smallestIndex])
			) {
				smallestIndex = leftIndex;
			}

			if (
				this.heap[rightIndex] &&
				this.compare(this.heap[rightIndex], this.heap[smallestIndex])
			) {
				smallestIndex = rightIndex;
			}

			if (smallestIndex === index) break;
			else {
				this.swap(index, smallestIndex);
				index = smallestIndex;
			}
		}
	}
}

function solution(jobs) {
	jobs.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1];
		else return a[0] - b[0];
	});

	let waitingQueue = new PriorityQueue();
	let totalTime = 0;
	let jobsCnt = jobs.length;
	let time = 0;
	let disk = 0;

	while (jobs.length || !waitingQueue.isEmpty()) {
		while (jobs.length) {
			if (jobs[0][0] === time) waitingQueue.insert(jobs.shift());
			else break;
		}

		if (disk === 0 && !waitingQueue.isEmpty()) {
			const [reqTime, operTime] = waitingQueue.delete();
			disk = operTime;
			totalTime += time + operTime - reqTime;
		}

		if (disk > 0) {
            disk--;
            time++;
        } else {
            if (jobs.length) time = jobs[0][0];
        }
	}

	return parseInt(totalTime / jobsCnt);
}