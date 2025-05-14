import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const num = input[1].split(" ").map(Number);
const visited = Array(N).fill(false);
const selected = [];
const answer = [];

const calculateAnswer = (arr, num) => {
  let sum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(num[arr[i]] - num[arr[i + 1]]);
  }

  return sum;
};

const DFS = (depth) => {
  if (depth === N) {
    answer.push(calculateAnswer(selected, num));
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    selected.push(i);
    DFS(depth + 1);
    selected.pop();
    visited[i] = false;
  }
};

DFS(0);
console.log(Math.max(...answer));
