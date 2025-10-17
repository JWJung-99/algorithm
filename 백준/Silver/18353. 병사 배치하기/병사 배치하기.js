let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let soldiers = input[1].split(" ").map(Number).reverse();

let lis = [0];

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

for (let soldier of soldiers) {
  if (lis[lis.length - 1] < soldier) {
    lis.push(soldier);
  } else {
    let index = lowerBound(lis, soldier, 0, lis.length);
    lis[index] = soldier;
  }
}

console.log(n - (lis.length - 1));