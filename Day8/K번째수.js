/*
[문제]
세준이는 크기가 N×N인 배열 A를 만들었다. 배열에 들어있는 수 A[i][j] = i×j 이다. 이 수를 일차원 배열 B에 넣으면 B의 크기는 N×N이 된다. B를 오름차순 정렬했을 때, B[k]를 구해보자.

배열 A와 B의 인덱스는 1부터 시작한다.

[입력]
첫째 줄에 배열의 크기 N이 주어진다. N은 105보다 작거나 같은 자연수이다. 둘째 줄에 k가 주어진다. k는 min(109, N2)보다 작거나 같은 자연수이다.

[출력]
B[k]를 출력한다.
*/

import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let k = Number(input[1]);

// O(N*N)
let b = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    b.push((i + 1) * (j + 1));
  }
}

console.log(b.sort((a, b) => a - b)[k - 1]);

// O(NlogN)
let start = 1;
let end = n * n;
let answer = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    cnt += Math.min(parseInt(mid / i), n);
  }

  if (cnt >= k) {
    answer = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(answer);
