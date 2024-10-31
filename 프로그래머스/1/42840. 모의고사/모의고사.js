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