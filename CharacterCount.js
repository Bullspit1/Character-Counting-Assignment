// the function will return all the unique characters that exsit in a string
//The function should report back how many instances of each letter were found in the string
//the function needs to return an object that can represent the stats for teh sentence it is given
// - return all characters found in the string
// - return respective counts
function countLetters(string){
var stringNS = string.split(" ").join("");
// console.log(string.length);
// var short = string

var letters = {};
for (key in stringNS) {
  var char =  stringNS[key];
  // console.log(char);
  // letters[char] = 1;
  // console.log(letters);

  // for (char in stringNS) {
  //   console.log();
  // }
  if (letters[char]) {
    letters[char] += 1
  }else{
    letters[char] = 1
  }
  // console.log(char);
  // console.log("Key: ", key, "string: ", stringNS[key]);
}
// console.log(letters);
return letters;
}

console.log(countLetters("lighthouse in the house"));
