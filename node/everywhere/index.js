const express = require('express');
const app = express();
const Port = process.env.PORT || 4000;
app.get('/', (req, res) => res.send("hello/"))
app.listen(Port, () => console.log('Listing on port '+Port))
