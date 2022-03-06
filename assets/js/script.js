// Assignment code here

//function to generate a random int from choices.length and return choices at that random index.
function random(choices) {
  var index = randomInt(choices.length)
  return choices[index]
}
//function to get a randominteger from a given limit
function randomInt(limit) {
  return Math.floor(Math.random() * Math.floor(limit))
}

// function containing the arrays of characters for the password to be generated from. 
function generatePassword() {
  //Arrays holding all possible characters, letters, and numbers
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var chars = ["+", "-", "&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"]
  var numbers1 = [0, 1 ,2, 3, 4, 5, 6, 7, 8, 9]
  //Array that holds all of my arrays
  var CharArray = []

 

