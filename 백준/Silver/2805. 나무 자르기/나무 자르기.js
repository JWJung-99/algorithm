let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let trees = input[1].split(' ').map(Number);

let start = 1;
let end = Math.max(...trees);
let maxHeight = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  
  let cut = 0;
  for (tree of trees) {
    if (mid < tree) {
      cut += tree - mid;
    }
  }

  if (cut >= m) {
    start = mid + 1;
    maxHeight = mid;
  } else if (cut < m) {
    end = mid - 1;
  } 

  if (cut == m)
    break;
}

console.log(maxHeight);