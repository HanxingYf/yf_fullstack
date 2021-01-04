var singleNumber = function(nums) {
    let m = new Map();
    for(let i of nums){
        if(!m.get(i)){
            m.set(i,1+m.get(i));
        }else{
            m.set(i,1);
        }
        
    }
    console.log(m);
    // m.forEach(function(value,key){
    //     if(value===1){
    //         console.log(key,value);
    //         return;
    //     }
    // })
};
let num = [2,2,1];
singleNumber(num);