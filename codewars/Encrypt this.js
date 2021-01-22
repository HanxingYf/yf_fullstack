// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
  // Implement me! :)
  let list = text.split(' ');
  let res = '';
  for(let text of list){
    for(let i = 0;i<text.length;i++){
      if(i == 0){
        res += text[i].charCodeAt();
      }
      else if(i == 1){
        res += text[text.length-1];
      }
      else if(i == text.length-1){
        res += text[1];
      }
      else{
        res += text[i];
      }
      
    }
    res += ' ';
  }
  
  return res.substr(0,res.length-1);
}
let text = "hello world";
console.log(encryptThis(text));
