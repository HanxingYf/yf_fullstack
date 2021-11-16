function sumT(a, b) {
    return  new Promise((resolve, reject) => {
        asyncAdd(a, b, (err, res) => {
            if(!err) {
                resolve(res)
            }
            reject(err)
        })
    })
}

// 测试
const test = await sumT(1, 2)
console.log(test)
// 3