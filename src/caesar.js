
const caesarModule = (function () {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function caesar(input, shift, encode = true) {
    input = input.toLowerCase();
    let result = [];
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false;
    }
    if (encode === false) {
      shift = shift * -1;
    } 
    for (let i = 0; i < input.length; i++) {
      let code = input.charCodeAt(i);
      if(code < 97 || code > 122) {
      result.push(String.fromCharCode(code));
      }
      else {
        code += shift;
          if (code > 96 && code < 123)result.push(String.fromCharCode(code));
        if (code < 97)
           result.push(String.fromCharCode(123 -(97 - code))); 
        if (code > 122)result.push(String.fromCharCode(96 +(code -122)));
        }
      }
    return result.join("");
    } 
                      
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
