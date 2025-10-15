let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

for (let i = 1; i <= n; i++) {
  let word = input[i];

  if (isPalindrome(word)) console.log(0);
  else {
    let length = word.length;
    let isSimilar = false;

    for (let i = 0; i < parseInt(length / 2); i++) {
      if (word[i] !== word[length - 1 - i]) {
        if (isPalindrome(word.slice(0, i) + word.slice(i + 1, length)))
          isSimilar = true;
        if (
          isPalindrome(
            word.slice(0, length - 1 - i) + word.slice(length - i, length)
          )
        )
          isSimilar = true;
        break;
      }
    }

    if (isSimilar) console.log(1);
    else console.log(2);
  }
}