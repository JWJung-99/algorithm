function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);

  while (people.length > 0) {
    if (people[0] + people[people.length - 1] <= limit) {
      people.pop();
      people.shift();
    } else {
      people.pop();
    }

    answer++;
  }

  return answer;
}

function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }

    right--;
    answer++;
  }

  return answer;
}
