var express = require('express');
const hbs = require('hbs');

var app = express();

const port = process.env.PORT || 3000;
//creating partial view
hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine','hbs');


//hbs helper funciton
hbs.registerHelper('getCurrentYear',() => {
return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
return text.toUpperCase();
});

//it takes middle ware function
app.use(express.static(__dirname+ '/public'));

/*
app.get('/', (req,res) => {
   // res.send('<h1>Hello Express</h1>');
   res.send({
name: 'uzair',
likes: [
    'abc',
    'xyz'
]
   });
});

*/
app.get('/',(req,res)=> {
    res.render('home.hbs',{
        pageTitle: "Home",
        welcomMesg: "Welcome to  y website",
       
    });
});


app.get('/about',(req,res)=> {
    res.render('about.hbs',{
        pageTitle: "About",
     
    });
});


app.get('/bad',(req,res)=>{
res.send({errMeasge: 'bad request'});
});
app.listen(port, () => {
    console.log("server is run on port 3000");
});