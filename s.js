var express = require('express')
var app = express()
app.use(express.static(require('path').join(__dirname, 'output')))
app.listen(2000, function () {
    console.log('http://127.0.0.1:2000')
})
