
var express = require('express');
const { respuesta } = require('../controller/test');
var router = express.Router();


// define the home page route
router.get('/', respuesta)
// define the about route
router.get('/about', function(req, res) {
  res.send('About birdos');
});

module.exports = router;
