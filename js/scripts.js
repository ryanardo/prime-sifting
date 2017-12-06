$(document).ready(function(){
  $("#primeNumberForm").submit(function(event) {
  var number = parseInt($("#primeNumberInput").val());
  event.preventDefault();

  var numberArray = [];

  for (var index = 0; index < number; index++) {
    numberArray.push(index);
  }

  for (var index=0; index < number; index++) {
    if (numberArray[index] <= 1 ) {
      numberArray[index] = 0;
    }

    if (numberArray[index] !== 0) {
      for (var index2 = index + index; index2 < number; index2 += index) {
        numberArray[index2] = 0;
      }
    }
  }

  for (var index=0; index < number; index++) {
    if (numberArray[index] !== 0) {
      $("#numberOutput").append(numberArray[index] + " ").css("font-size", index + "px;");
    }
  }

  });
});
