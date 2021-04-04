require('dotenv').config(); 
console.log(process.env.SESSION_SECRET)
const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const useRoute = require('./routes/rou'); 
const cookieParser = require('cookie-parser'); 
const authRouter = require('./routes/authrouter')
const usePro = require('./routes/rou_pro')
const sessionMildle = require('./middlewares/session.midle'); 
const addCart = require('./routes/cart.rout')
const middle = require('./middlewares/mid')
const port = 3000; 

app.set('view engine', 'pug'); 
app.set('views', './views'); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cookieParser(process.env.SESSION_SECRET)); 
app.use(sessionMildle); 

app.use(express.static('public')); 

app.get('/', (req, res) =>{
    res.render('index', {
        name : 'Coderx'
    }); 
})


app.use('/users',middle.requireauth,  useRoute); 
app.use('/auth', authRouter); 
app.use('/pro', usePro); 
app.use('/cart', addCart)

app.listen(port, () => {
    console.log('Exambel app listening'); 
})