// console.log("hello world".slice(1));

function generateHashtag(str){
    // let arr = [];
    // str
        // .split(' ')
        // .forEach(item =>{
            // console.log(item);
            // arr.push(item.charAt(0).toUpperCase() + item.slice(1));
            // console.log('a');
            return str.length > 140 || str ==='' ? false : '#' + str.split(' ').map(capitalize).join(' ');
        // })
    // return arr.join(' ');
    // console.log(arr);
   
}
//map 的callback
function capitalize(item){
    // console.log('asd');
    return item.charAt(0).toUpperCase() + item.slice(1);
}

console.log(generateHashtag('hello world'));