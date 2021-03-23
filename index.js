const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const useRoute = require('./routes/rou'); 
const cookieParser = require('cookie-parser'); 

const port = 3000; 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 

const db = require('./db'); 

var users = db.get('users').value(); 


app.set('view engine', 'pug'); 
app.set('views', './views'); 



app.get('/', (req, res) =>{
    res.render('index', {
        name : 'Coderx'
    }); 
})

app.use(cookieParser())
app.use('/users', useRoute); 

app.use(express.static('public')); 

app.listen(port, () => {
    console.log('Exambel app listening'); 
})