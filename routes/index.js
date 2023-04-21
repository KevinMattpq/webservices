const express = require('express');
const router = express.Router();

router.get('/',function(req, res){
    res.send('Alex Ferreira')
  });

module.exports = router;