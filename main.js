function sortArray(arr) {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}

var numbers = [];
for (var i = 0; i < 5; i++) {
  var num = parseInt(prompt("Enter number " + (i+1) + ": "));
  numbers.push(num);
}

console.log("Original array:", numbers);
sortArray(numbers);
console.log("Sorted array:", numbers);
