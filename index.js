const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const useRoute = require('./routes/rou'); 
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

app.use('/users', useRoute); 

app.listen(port, () => {
    console.log('Exambel app listening'); 
})