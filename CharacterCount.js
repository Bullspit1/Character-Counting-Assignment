// the function will return all the unique characters that exsit in a string
//The function should report back how many instances of each letter were found in the string
//the function needs to return an object that can represent the stats for teh sentence it is given
// - return all characters found in the string
// - return respective counts
function countLetters(string){ //a function with the string "lighthouse in the house" in the parenthesis
var stringNS = string.split(" ").join("");  //takes the parameter string and splits the string into an array followed by joins them together so there are no spaces
// console.log(string.length);
// var short = string

var letters = {}; // a variable with an empty object.
for (var key in stringNS) { // A for loop that loops through each letter of stringNS and fills the empty var key with the number of letters in it.
  var char =  stringNS[key]; // created a variable char and stored stringNS[key] stringNS is in an array so it loops through each letter
  // console.log(letters[char]);
  // console.log(char);
  // letters[char] = 1;
  // console.log(letters);

  // for (char in stringNS) {
  //   console.log();
  // }
  if (letters[char]) { // if statement saying that if letter[char] with the input char is undefined
    letters[char] += 1 // if the if statement was true this will run meaning add 1 to the number
  }else{
    letters[char] = 1 // else if the if statement was false it will put one where it was undefined
  }
  // console.log(char);
  // console.log("Key: ", key, "string: ", stringNS[key]);
}
// console.log(letters);
return letters; //returns the letter objects
}

console.log(countLetters("lighthouse in the house"));
