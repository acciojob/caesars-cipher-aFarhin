function rot13(encodedStr) {
  var decodedStr = "";
  for (var i = 0; i < encodedStr.length; i++) {
    var char = encodedStr[i];
    if (char.match(/[A-Z]/)) {
      var code = encodedStr.charCodeAt(i);
      if (code >= 78) {
        char = String.fromCharCode(code - 13);
      } else {
        char = String.fromCharCode(code + 13);
      }
    }
    decodedStr += char;
  }
  return decodedStr;
}
