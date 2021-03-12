const path = require('path') // 路径
const fse = require('fs-extra'); // fs 扩展包
const { WriteStream } = require('fs');
const { resolve } = require('path');



// 合并文件快
const fileName = 'yb';
const filePath = path.resolve(__dirname, '.', `${fileName}.jpeg`);


const pipStream = (path, WriteStream) =>
  new Promise(resolve => {
    const readStream = fse.createReadStream(path);
    readStream.on("end", () => {
      fse.unlinkSync(path)
      resolve();
    })
    readStream.pipe(WriteStream)
  })


// console.log(filePath);
const mergeFileChunk = async (filePath, fileName, size) => {
  // console.log(filePath, fileName, size);
  const chunkDir = path.resolve(__dirname, fileName)
  // console.log(chunkDir);
  const chunkPaths = await fse.readdir(chunkDir)
  // console.log(chunkPaths);
  chunkPaths.sort((a, b) => {
    a.split("-")[1] - b.split('-')[1];
  })
  // console.log(chunkPaths);
  // 每块内容写入最后的文件， promise
  await Promise.all(
    chunkPaths.map((chunkPath, index) =>
      pipStream(
        path.resolve(chunkDir, chunkPath),
        fse.createWriteStream(filePath, {
          start: index * size,
          end: (index + 1) * size
        })
      )
    )
  )
  // console.log('合并成功');
  fse.rmdirSync(chunkDir)
}

mergeFileChunk(filePath, fileName, 0.5 * 1024 * 1024);
