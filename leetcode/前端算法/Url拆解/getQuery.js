function getQueryObj(url){
  let arr = url.split('?')[1].split('#')[0].split('&');
  const res={};
  arr.forEach(e => {
    const [key,value] = e.split('=');
    if(!value){
      res[key]=''
    }else{
      res[key]=value;
    }
  });
  return res
}

let url = 'http://sample.com/?a=1&e&b=2&c=xx&d#hash';
console.log(getQueryObj(url));;