const fetch = require("node-fetch");  //内置
let cheerio = require('cheerio');
// const { httpify } = require('caseless');

let url = 'https://movie.douban.com/top250';

const main = async () => {  //async 关键字
    // let html = await request({  //等着去爬取一下
    //     url
    // });
    // console.log(html);
    // http
    //     .get(url)
    //     .then(data =>{
    //         console.log(data);
    //     })
    fetch(url)
        .then(res => res.text())
        .then(body => {
            let $ = cheerio.load(body);
            let movieNodes = $('#content .item');
            console.log(movieNodes);
        });
}


main();