function sortArray() {
    var numbers = [];
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var num5 = parseInt(document.getElementById("num5").value);
  
    numbers.push(num1, num2, num3, num4, num5);
  
    var n = numbers.length;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n - i - 1; j++) {
        if (numbers[j] > numbers[j+1]) {
          var temp = numbers[j];
          numbers[j] = numbers[j+1];
          numbers[j+1] = temp;
        }
      }
    }
  
    document.getElementById("originalArray").innerHTML = numbers.join(', ');
    document.getElementById("sortedArray").innerHTML = numbers.join(', ');
  }
  
