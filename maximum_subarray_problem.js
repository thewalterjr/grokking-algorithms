function maximumSumSubarray(arr) {
  let maxSum = arr[0];
  let sum = arr[0];

  for(let i = 1; i < arr.length; i++) {
    let number = arr[i];
    sum = Math.max(sum + number, number);
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}


arr = [4, -1, 2, 1];
console.log(maxSumSubArray(arr));
