class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;

    return item;
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let MAX = 100001;
let [n, k] = input[0].split(" ").map(Number);
let visited = Array(MAX).fill(0);

function bfs() {
  const queue = new Queue();
  queue.enqueue(n);

  while (queue.getLength() > 0) {
    let current = queue.dequeue();
    if (current === k) return visited[current];

    for (let next of [current - 1, current + 1, current * 2]) {
      if (next < 0 || next >= MAX) continue;

      if (visited[next] === 0) {
        visited[next] = visited[current] + 1;
        queue.enqueue(next);
      }
    }
  }
}

console.log(bfs());