const fse = require('fs-extra')
const path = require('path')
const http = require('http')
const multiparty = require('multiparty')
const server = http.createServer();
const UPLOAD_DIR = path.resolve(__dirname,'.',"target");
server.on("request", async (req, res) => {
  // res.end("hello");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow_Headers","*")
  res.end('hello')

  if(req.url == '/'){
    const multipart = new multiparty.Form();
    // console.log(multipart);
    multipart.parse(req, async(err,fields,files)=>{
      if(err){
        return ;
      }

      console.log(files);
      const [chunk] = files.chunk;
      // console.log(chunk);
      const [filename] = fields.filename
      // console.log(filename);
      const dir_name = filename.split('-')[0];
      const chunkDir = path.resolve(UPLOAD_DIR,dir_name);
      if(!fse.existsSync(chunkDir)){
        await fse.mkdirs(chunkDir)
      }
      await fse.move(chunk.path,`${chunkDir}/${filename}`)
    })
  }
})

server.listen(3000, () => console.log('正在监听3000'))