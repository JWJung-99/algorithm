let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [s, t] = input[0].split(" ").map(Number);

let found = false;
let visited = new Set([s]);
let queue = [];
queue.push([s, ""]);

while (queue.length > 0) {
  let [value, opers] = queue.shift();

  if (value > 1e9) continue;

  if (value === t) {
    found = true;

    if (value === s) {
      console.log(0);
    } else {
      console.log(opers);
    }

    break;
  }

  for (let oper of ["*", "+", "-", "/"]) {
    let nextValue = value;

    if (oper === "*") nextValue *= value;
    else if (oper === "+") nextValue += value;
    else if (oper === "-") nextValue -= value;
    else if (oper === "/" && value != 0) nextValue = 1;

    if (!visited.has(nextValue)) {
      queue.push([nextValue, opers + oper]);
      visited.add(nextValue);
    }
  }
}

if (!found) console.log(-1);