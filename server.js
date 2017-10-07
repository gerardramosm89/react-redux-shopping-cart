"use strict"
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/images', (req, res) => {
  const imgFolder = __dirname + '/public/images/';
  const fs = require('fs');
  fs.readdir(imgFolder, (err, files) => {
    if (err) {
      return console.log('we ran into error: ', err);
    }
    const filesArr = [];
    files.forEach((file) => {
      filesArr.push({ name: file });
    });
    res.json(filesArr);
  })
});

app.listen(3000, function() {
  console.log(`App is listening on port 3000`);
})