const webp = require('webp-converter');

webp.cwebp("9f0227e84e327b52.jpg", "output.webp", "-q 80", function(status, error){
    console.log(status);
})
