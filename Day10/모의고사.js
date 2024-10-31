/*
[문제 설명]
문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

[제한 조건]
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

*/

// function solution(answers) {
//   let answer = [];

//   const answer1 = [1, 2, 3, 4 ,5];
//   const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const answer3 =

//   function firstStudent(answers) {
//     let score = 0;
//     answers.forEach((item, index) => {
//       if (answers[index] === (index % 5) + 1) score++;
//     });
//     return score;
//   }

//   function secondStudent(answers) {
//     let score = 0;
//     answers.forEach((item, index) => {
//       if (index % 2 === 0) {
//         if (answers[index] === 2) score++;
//       } else if (index % 8 === 1) {
//         if (answers[index] === 1) score++;
//       } else if (index % 8 === 3) {
//         if (answers[index] === 3) score++;
//       } else if (index % 8 === 5) {
//         if (answers[index] === 4) score++;
//       } else if (index % 8 === 7) {
//         if (answers[index] === 5) score++;
//       }
//     });
//     return score;
//   }

//   function thirdStudent(answers) {
//     let score = 0;
//     answers.forEach((item, index) => {
//       if (index % 10 <= 1) {
//         if (answers[index] === 3) score++;
//       } else if (index % 10 <= 3) {
//         if (answers[index] === 1) score++;
//       } else if (index % 10 <= 5) {
//         if (answers[index] === 2) score++;
//       } else if (index % 10 <= 7) {
//         if (answers[index] === 4) score++;
//       } else if (index % 10 <= 9) {
//         if (answers[index] === 5) score++;
//       }
//     });
//     return score;
//   }

//   const scores = [
//     firstStudent(answers),
//     secondStudent(answers),
//     thirdStudent(answers),
//   ];

//   let maxScore = Math.max(...scores);

//   scores.map((item, index) => {
//     if (item === maxScore) answer.push(index + 1);
//   });

//   return answer;
// }

// console.log(solution([1, 3, 2, 4, 2]));

function solution(answers) {
  let answer = [];

  const answer1 = [1, 2, 3, 4, 5];
  const answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const scores = [0, 0, 0];

  answers.forEach((item, index) => {
    if (item === answer1[index % answer1.length]) scores[0]++;
    if (item === answer2[index % answer2.length]) scores[1]++;
    if (item === answer3[index % answer3.length]) scores[2]++;
  });

  const maxScore = Math.max(...scores);

  if (scores[0] === maxScore) answer.push(1);
  if (scores[1] === maxScore) answer.push(2);
  if (scores[2] === maxScore) answer.push(3);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
