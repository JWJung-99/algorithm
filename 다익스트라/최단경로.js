import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  enqueue(node) {
    this.heap.push(node);
    this.bubbleUp();
  }

  dequeue() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown();
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (element[1] >= parent[1]) break;
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  sinkDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild[1] < element[1]) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild[1] < element[1]) ||
          (swap !== null && rightChild[1] < leftChild[1])
        )
          swap = rightChildIndex;
      }
      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = element;
  }

  getLength() {
    return this.heap.length;
  }
}

let INF = 1e9;
let [V, E] = input[0].split(" ").map(Number);
let startNode = Number(input[1]);
let graph = Array.from(new Array(V + 1), () => []);

for (let i = 2; i < E + 2; i++) {
  let [from, to, dist] = input[i].split(" ").map(Number);
  graph[from].push([to, dist]);
}

const pq = new MinHeap();
let distArr = Array(graph.length).fill(INF);

distArr[startNode] = 0;
pq.enqueue([startNode, 0]);

while (pq.getLength()) {
  const [to, dist] = pq.dequeue();

  if (dist > distArr[to]) continue;

  graph[to].forEach((next) => {
    const acc = distArr[to] + next[1];

    if (distArr[next[0]] > acc) {
      distArr[next[0]] = acc;
      pq.enqueue([next[0], acc]);
    }
  });
}

for (let i = 1; i < distArr.length; i++) {
  if (distArr[i] === INF) console.log("INF");
  else console.log(distArr[i]);
}
