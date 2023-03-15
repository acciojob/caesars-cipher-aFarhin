// Your Script here.
function rot13(str) {
  var decodedStr = "";
  for (var i = 0; i < str.length; i++) {
    var asciiCode = str.charCodeAt(i);
    if (asciiCode >= 65 && asciiCode <= 90) {
      // for uppercase alphabets only
      var shiftedAsciiCode = (((asciiCode - 65) + 13) % 26) + 65;
      decodedStr += String.fromCharCode(shiftedAsciiCode);
    } else {
      // for non-alphabetic characters
      decodedStr += str[i];
    }
  }
  return decodedStr;
}

