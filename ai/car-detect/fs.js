const fs = require('fs');

fs.readFile('./timg.jpg',function(err,data){
    // console.log(err);
    if(err){
        throw new Error(err);
        rerun;
    }
    console.log(data.toString());
})