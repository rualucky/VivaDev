var express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
  res.render('Home', {});
})

module.exports = router
