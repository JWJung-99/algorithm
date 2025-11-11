function solution(queue1, queue2) {
	let N = queue1.length + queue2.length;
	let queue1_sum = queue1.reduce((acc, cur) => acc + cur);
	let queue2_sum = queue2.reduce((acc, cur) => acc + cur);

	let queue1_index = 0;
	let queue2_index = 0;

	let cnt = 0;

	while (queue1_sum !== queue2_sum) {
		if (queue1_sum < queue2_sum) {
			let num = queue2[queue2_index];
			queue2_sum -= num;
			queue1_sum += num;
			queue1.push(num);
			queue2_index += 1;
		} else {
			let num = queue1[queue1_index];
			queue1_sum -= num;
			queue2_sum += num;
			queue2.push(num);
			queue1_index += 1;
		}

		cnt += 1;

		if (queue1_index > N || queue2_index > N) {
			return -1;
		}
	}

	return cnt;
}