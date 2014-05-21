var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var comments = [];
for (var i = 1; i <= 25; i++) {
  comments.push({
    author: 'Author ' + i,
    text: ' created at ' + new Date()
  });
}
setInterval(function() {
  comments.forEach(function(comment) {
    comment.text = ' updated at ' + new Date() + ' - ' + Math.random();
  });
}, 10);
app.use('/', express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.json());
app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});
app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});
module.exports = app;