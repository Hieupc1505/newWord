const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const useRoute = require('./routes/rou'); 
const cookieParser = require('cookie-parser'); 
const authRouter = require('./routes/authrouter')
const port = 3000; 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 

const db = require('./db'); 
const middle = require('./middlewares/mid')

var users = db.get('users').value(); 


app.set('view engine', 'pug'); 
app.set('views', './views'); 
app.use(cookieParser()); 


app.get('/', (req, res) =>{
    res.render('index', {
        name : 'Coderx'
    }); 
})


app.use('/users',middle.requireauth,  useRoute); 
app.use('/auth', authRouter); 
app.use(express.static('public')); 

app.listen(port, () => {
    console.log('Exambel app listening'); 
})