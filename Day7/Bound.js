// end : 배열의 길이

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}
