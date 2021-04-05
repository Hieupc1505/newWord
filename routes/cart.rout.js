const express = require('express'); 
const router = express.Router(); 
const constrol = require('../controler/cart.control');

router.get('/add/:produceId', constrol.addCart ); 

module.exports = router; 