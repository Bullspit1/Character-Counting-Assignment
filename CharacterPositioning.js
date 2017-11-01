//return all the indices (index) (zero-based positions) in the string
//where each character is found

//for each letter not returning 1 number but rather multiple numbers
//to represent all the places in the string

function countLetters(string){ //a function with the string "lighthouse in the house" in the parenthesis
var stringNS = string.split(" ").join("");  //takes the parameter string and splits the string into an array followed by joins them together so there are no spaces
// var positionOfWord = 0;
// console.log(string.length);
// console.log(typeof(stringNS));
var letters = {}; // a variable with an empty object.
for (var key = 0; key < stringNS.length; key++) { // A for loop that loops through each letter of stringNS and fills the empty var key with the number of letters in it.
  var char =  stringNS[key]; // created a variable char and stored stringNS[key] stringNS is in an array so it loops through each letter
  // console.log("letter ", stringNS[key]);
  // console.log(letters[char]);
  // console.log(char);
  // console.log(letters);
  // var positionOfWord = char.length;
  // console.log(positionOfWord);

  // for (char in stringNS) {
  //   console.log();
  // }
  if (letters[char]) { // if statement saying that if letter[char] with the input char is undefined
    // letters[char] = [];
    letters[char].push(key);
    // letters[char] += 1 // if the if statement was true this will run meaning add 1 to the number
  }else{
    letters[char] = [];
    letters[char].push(key); // else if the if statement was false it will put one where it was undefined
  }
  // console.log(typeof(letters[[char]]);
  // console.log(char);
  // console.log("Key: ", key, "string: ", stringNS[key]);
}
// console.log(letters);
return letters; //returns the letter objects
}

console.log(countLetters("lighthouse in the house"));

/*
{
  "h": 4, 6, 16, 19
}
*/
