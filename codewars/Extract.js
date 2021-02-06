function domainName(url){
  //your code here
  let reg = /^http(s)?:\/\/(.*?)\//;
  let str = '45123';
  let n = str.search(reg);
  console.log(n);
}

let url = "http://github.com/carbonfive/raygun";
console.log(domainName(url));