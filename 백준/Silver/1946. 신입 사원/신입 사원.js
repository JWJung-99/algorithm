let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);
let current = 1;

for (let i = 0; i < t; i++) {
  let n = Number(input[current]);
  let applicant = [];

  for (let j = 1; j <= n; j++) {
    let [docs, interview] = input[current + j].split(" ").map(Number);
    applicant.push([docs, interview]);
  }
  applicant.sort((a, b) => a[0] - b[0]);

  let cnt = 0;

  let lowest = 100001;
  for (let [x, y] of applicant) {
    if (y < lowest) {
      lowest = y;
      cnt += 1;
    }
  }

  console.log(cnt);

  current += n + 1;
}
