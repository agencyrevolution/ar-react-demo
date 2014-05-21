var express = require('express');
var router = express.Router();
var comments = [];
var count = 0;
var n = 10;

function addComment() {
  count++;
  comments.push({
    text: "Comment " + count,
    createdDate: new Date()
  });
};
for (var i = 1; i <= count; i++) {
  addComment();
};
setInterval(function() {
  addComment();
}, 100);
/* GET users listing. */
router.get('/', function(req, res) {
  res.send(200, comments);
});
module.exports = router;