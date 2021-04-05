const express = require('express'); 
const router = express.Router(); 
const constrol = require('../controler/authcontrol');

router.get('/login', constrol.index ); 
router.post('/login', constrol.postReq); 

module.exports = router; 