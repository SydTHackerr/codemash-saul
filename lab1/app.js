$(function() {

  // Lab 1
  // FizzBuzz
  //
  // for 1 to 30
  // if the number is multiple of 3, print "Fizz"
  // if the number is multiple of 5, print "Buzz"
  // if the number is multiple of 3 and 5, print "FizzBuzz"
  // else print the number
  //
  // Put the solution in an object literal that calls a function

  $('#fizzBuzzButton').on('click', function(event) {
    event.preventDefault();
    $('#fizzbuzz-results').append(output);
  });

  // Lab 2
  //
  // fix the avoidCops function in the Evasion object and log/alert the result
  $('#lab-2').on('click', function() {
    alert(Evasion.avoidCops());
  });

  // Lab 3
  //
  // Call the knocks function in the Messages object
  $("#lab-3").on('click', function() {
  });
});

var Evasion = {
  avoidCops: function() {
    for (var i = 0; i <= 10; i++) {
      var loop = 'Cops avoided again!';
    }
  }
};

var Messages = {
  knocks: function() {
    var messageText = 'I am the one who knocks.';
    return function() {
      return messageText;
    };
  }
};
