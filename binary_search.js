function binary_search(list, item) {
  let high = list.length - 1;
  let low = 0;

  while (low < high) {
    let mid = Math.floor((high + low)/2);
    let guess = list[mid];

    if (guess > item) {
      high = mid - 1
    } else if (guess < item) {
      low = mid + 1
    } else {
      return "The item exists in the List";
    }

  }
  return "The item doesnt exists in the List";
}

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binary_search(list, 0));
