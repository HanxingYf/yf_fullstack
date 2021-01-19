// "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

// Could you help John with a program that, given the lines of his phone book and a phone number num returns a string for this number : "Phone => num, Name => name, Address => adress"

// Examples:

// s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

// phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
// It can happen that there are many people for a phone number num, then

// return : "Error => Too many people: num"

// or it can happen that the number num is not in the phone book, in that case

// return: "Error => Not found: num"

// You can see other examples in the test cases.

// JavaScript random tests completed by @matt c

function phone(strng, num) {
  // your code
  if(cnt_f(strng,num) === 0){
    return 'Error => Not found: num';
  }
  if(cnt_f(strng,num)>=2){
    return "Error => Too many people: num";
  }
  // console.log(cnt_f(strng,num));
  let _str = strng.match(/\<(.+?)\>/g);
  console.log(RegExp.$1,RegExp.$2);
}

function cnt_f(strng,num){
  let cnt = 0;
  while(strng.indexOf(num) != -1){
    strng = strng.replace(num,'');
    cnt++;
  }
  return cnt;
}
let s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n";
let num = "1-541-754-3010";
console.log(phone(s, num));