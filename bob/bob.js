//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
//
// YOUR CODE GOES HERE
//
  if(input.split("gym").length === 2) {
    return "Whatever."
  }

  if(input.split("HELL WERE YOU").length === 2) {
    return "Whoa, chill out!";
  }

  if(input.split("I HATE").length === 2) {
    return "Whoa, chill out!"
  }
  if(input === "" || input === "   ") {
    return "Fine. Be that way!"
  }
  var lastChar = input.split("")[input.length - 1]
  if (lastChar === "?") {
    return "Sure.";
  } else if (lastChar === "!") {
    return "Whoa, chill out!";
  }  else {
    return "Whatever."
  }



};

module.exports = Bob;
