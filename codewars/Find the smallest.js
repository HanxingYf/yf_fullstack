// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

// #Task: Return an array or a tuple or a string depending on the language (see "Sample Tests") with

// 1) the smallest number you got
// 2) the index i of the digit d you took, i as small as possible
// 3) the index j (as small as possible) where you insert this digit d to have the smallest number.
// Example:

// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

// smallest(209917) --> [29917, 0, 1] or ...

// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than 
// index `i` in [29917, 0, 1].
// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

// smallest(1000000) --> [1, 0, 6] or ...

function smallest(n) {
  // Your code
  let s = n.toString();
  let res = [];
  // console.log(s.indexOf('0'));
  if(s.indexOf('0') == -1){
    // console.log("没有0");
    let min_index = 0;
    for(let i = 1;i<s.length;i++){
      if(s[min_index] - s[i] > 0){
        min_index = i;
      }
    }
    if(min_index == 0){
      let min = s[1];
      let ind = 0;
      for(let i = 2; i<s.length;i++){
        if(s[i] < min){
          min = s[i];
          ind = i;
        }
      }
      s = s[0] + min + s.substr(1,ind-1) + s.substr(ind+1);
      res.push(parseInt(s));
      res.push(ind);
      res.push(1);
    }
    else{
      s = s[min_index] + s.substr(0,min_index) + s.substr(min_index+1);
      res.push(parseInt(s));
      res.push(min_index);
      res.push(0);
    }
  }
  if(s.indexOf('0') == 1){
    // console.log("第二个0");
    let i = 1;
    while(s[i] == '0'){
      i++;
    }
    s =s[0] + s.substr(i);
    res.push(parseInt(s));
    res.push(0);
    res.push(i-1);
  }
  if(s.indexOf('0') > 1 ){
    // console.log("其他",s.indexOf('0'));
    let i = s.indexOf('0');
    s = s.substr(0,i) + s.substr(i+1);
    res.push(parseInt(s));
    res.push(i);
    res.push(0);
  }
  return res;
}

let n = 296837;
console.log(smallest(n));