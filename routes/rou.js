const express = require('express'); 
const router = express.Router(); 
const shortId = require('shortid'); 
const db = require('../db')
const constrol = require('../controler/control');
const validate = require('../validate/validate');
const midauth = require('../middlewares/mid');
const multer = require('multer'); 
var upload = multer({dest:'./public/uploads/' })
router.get('/', constrol.index ); 

router.get('/search', constrol.search); 

router.post('/create',
            upload.single('avata'),
            validate.postCreate,
            constrol.postcreate)

router.get('/create', constrol.create); 

router.get('/cookie', constrol.cookie); 
router.get('/:id', constrol.user)

module.exports = router; 