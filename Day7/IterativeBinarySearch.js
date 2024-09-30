function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}
