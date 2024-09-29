/*
[문제]
회문(回文) 또는 팰린드롬(palindrome)은 앞 뒤 방향으로 볼 때 같은 순서의 문자로 구성된 문자열을 말한다. 예를 들어 ‘abba’ ‘kayak’, ‘reviver’, ‘madam’은 모두 회문이다. 만일 그 자체는 회문이 아니지만 한 문자를 삭제하여 회문으로 만들 수 있는 문자열이라면 우리는 이런 문자열을 “유사회문”(pseudo palindrome)이라고 부른다. 예를 들어 ‘summuus’는 5번째나 혹은 6번째 문자 ‘u’를 제거하여 ‘summus’인 회문이 되므로 유사회문이다.

[입력]
입력의 첫 줄에는 주어지는 문자열의 개수를 나타내는 정수 T(1 ≤ T ≤ 30)가 주어진다. 다음 줄부터 T개의 줄에 걸쳐 한 줄에 하나의 문자열이 입력으로 주어진다. 주어지는 문자열의 길이는 3 이상 100,000 이하이고, 영문 알파벳 소문자로만 이루어져 있다.

[출력]
각 문자열이 회문인지, 유사 회문인지, 둘 모두 해당되지 않는지를 판단하여 회문이면 0, 유사 회문이면 1, 둘 모두 아니면 2를 순서대로 한 줄에 하나씩 출력한다.
*/
import fs from "fs";
let input = fs.readFileSync("../input.txt").toString().trim().split("\n");

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

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
