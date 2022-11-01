let example = "hello world";

function charRepeats(str) {
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        console.log(str[i]);
      }
    }
  return "There are no duplicate letters in this string"; //does not repeat
}

console.log(charRepeats(example));