const express = require('express')
const app = express()
app.get('/', (req, res) => {
  console.log("Home");
  res.send('hello world');
})
// app.listen(3003, () => {

// })
// export default // es6
// module.exports = app  // commonJs
