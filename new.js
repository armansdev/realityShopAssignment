function squared(arr) {
  let negative = [];
  let positive = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negative.unshift(arr[i] * arr[i]);
    } else {
      positive.push(arr[i] * arr[i]);
    }
  }

  let res = [];
  let i = 0;
  let j = 0;
  while (i < negative.length && j < positive.length) {
    if (negative[i] < positive[j]) {
      res.push(negative[i]);
      i++;
    } else {
      res.push(positive[j]);
      j++;
    }
  }

  while (i < negative.length) res.push(negative[i++]);
  while (j < positive.length) res.push(positive[j++]);

  return res;
}

console.log(squared([-45, -7, -1, 2, 4, 6, 8])); // [1,  4, 16, 36, 49, 64, 2025]

// squared(sorted_arr_of_numbers) => [sorted_squared_numbers]
