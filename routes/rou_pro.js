const express = require('express'); 
const router = express.Router(); 
const pro = require('../controler/pro_control');
const db = require('../db')

router.get('/', pro.show); 

module.exports = router; 
