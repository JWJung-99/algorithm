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
		if (task1[2] !== task2[2]) return task1[2] < task2[2];
		// 2. 작업의 요청 시각이 빠른 것
        else if (task1[1] !== task2[1]) return task1[1] < task2[1];
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
    // 0. 작업들을 소요시간이 짧은 것, 요청 시각이 빠른 것, 작업 번호가 작은 것 순으로 정렬
	jobs = jobs.map((job, i) => [i, ...job]).sort((a, b) => a[1] - b[1]);
    
    console.log(jobs);

	let waitingQueue = new PriorityQueue();
	let totalTime = 0;
	let jobsCnt = jobs.length;
	let time = 0;
	let disk = 0;
    
    // 작업이 대기 큐에 들어가지 않았거나, 대기 큐에 남은 작업이 있다면 반복
	while (jobs.length || !waitingQueue.isEmpty()) {
        // 1. 해당 time에 작업 요청이 들어오면 대기 큐에 [작업의 번호, 작업의 요청 시각, 작업의 소요 시간] 저장
		while (jobs.length) {
            // 1-1. 대기 큐에 작업을 추가하면 우선순위에 따라 정렬
			if (jobs[0][1] === time) waitingQueue.insert(jobs.shift());
			else break;
		}
        
        // 2. 하드디스크가 작업을 하고 있지 않고 대기 큐가 비어있지 않다면 가장 우선순위가 높은 작업을 대기 큐에서 꺼내서 하드디스크에 그 작업 수행
		if (disk === 0 && !waitingQueue.isEmpty()) {
            // 2-1. 우선순위가 높은 작업을 대기 큐에서 꺼내고 우선순위에 따라 정렬
			const [index, reqTime, operTime] = waitingQueue.delete();
            // 2-2. 하드디스크의 남은 작업 시간 업데이트
			disk = operTime;
            // 2-3. 각 작업에 대한 반환 시간(작업 요청부터 종료까지 걸린 시간) 계산
			totalTime += time + operTime - reqTime;
		}
        
        // 3-1. 하드디스크에서 작업을 수행 중이라면 1ms 마다 time, 남은 작업 시간 업데이트
		if (disk > 0) {
            disk--;
            time++;
        }
        // 3-2. 하드디스크에서 수행 중인 작업이 없다면 다음으로 수행할 작업의 요청 시간으로 바로 이동
        else {
            if (jobs.length) time = jobs[0][1];
        }
	}

	return parseInt(totalTime / jobsCnt);
}