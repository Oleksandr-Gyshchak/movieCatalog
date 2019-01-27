var express = require('express');
var router = express.Router();
const fs = require("fs");
var readline = require('readline');
var mongoose = require('mongoose');

router.patch('/', function (req, res, next) {

  res.render('index', {
    title: 'Express'
  });




});

module.exports = router;