let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let cards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let search = input[3].split(" ").map(Number);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}

function countNum(arr, target) {
  const minIndex = lowerBound(arr, target, 0, n);
  const maxIndex = upperBound(arr, target, 0, n);

  return maxIndex - minIndex;
}

console.log(search.map((item) => countNum(cards, item)).join(" "));