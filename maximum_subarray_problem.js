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

function maxSumSubArray(arr) {
  let localMax = arr[0];
  let globalMax = arr[0];

  for(let i = 1; i < arr.length; i++) {
    localMax = Math.max(arr[i], arr[i] + localMax);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }
  return globalMax;
}


arr = [4, -1, 2, 1];
console.log(maximumSumSubarray(arr)); // 6

secondArr = [2, -5, 10, -1, 4, -10];
console.log(maxSumSubArray(secondArr)); // 13
