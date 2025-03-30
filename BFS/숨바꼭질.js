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

import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

let MAX = 100001;
let [n, k] = input[0].split(" ").map(Number);
let visited = new Array(MAX).fill(0);

function bfs() {
  const queue = [];
  queue.push(n);

  while (queue.length > 0) {
    let current = queue.shift();
    if (current === k) return visited[current];

    for (let next of [current - 1, current + 1, current * 2]) {
      if (next < 0 || next >= MAX) continue;

      if (visited[next] === 0) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      }
    }
  }
}

console.log(bfs());
