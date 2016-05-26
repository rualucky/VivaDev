var express = require('express'),
    router = express.Router();

router.get('/', (req, res, next) => {
  //res.sendFile(__dirname + '/category/index.html')
  res.render('Category',{});
})

module.exports = router;
