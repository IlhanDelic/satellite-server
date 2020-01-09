//load in environment variables
//array for local storage an test only
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import express from 'express';
const app = express();
const bcrypt = require('bcrypt'); // allow to hash passwords and compare hashed passwords
const passport = require('passport'); // passport is used for authentication/ local is je just to use UN and PW to login
const flash = require('express-flash');
const session = require('express-session');

const initializePassport = require('./passport.config');
initializePassport(passport, (email: string)=> {
    users.find(((user: any) => user.email === email ) , //finding the user based on email
        (id: string) => users.find((user: any) => user.id === id))
    console.log(email);
    console.log()
});
const users = [{id:'1', email:'bob@mail.com', password:'bob', name:'bob', location:'roomA'},
    {id:'2', email:'jay@mail.com', password:'jay', name:'jay', location:'roomB'},
    {id:'3', email:'rik@mail.com', password:'rik', name:'rik', location:'roomC'},
    {id:'4', email:'piet@mail.com', password:'piet', name:'piet', location:'roomD'}];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false})); // make sure you can access the data in the req instead of the post methode
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET, // a key we want to keep secret
    resave: false, //dont save if nothing has changed
    saveUninitialized: false // do you want to save an empty value in the session and we dont want that
    }));
app.use(passport.initialize());
app.use(passport.session());
//--------------------------------------------------------------------------- homepage

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', { name: req.body.name })});
    console.log("welcoming text");
//--------------------------------------------------------------------------- login
app.get('/login', (req, res) => {
    res.render('login.ejs');
    console.log("login page");
});
//--------------------------------------------------------------------------- login post
app.post('/login', passport.authenticate('local', {
    successRedirect: '/', // go to the home page when you're successfully logged in
    failureRedirect: '/login', //if there is a failure then you stay at the login page
    failureFlash: true // let us have a flash message
}));
//--------------------------------------------------------------------------- register
app.get('/register', (req, res) => {
    res.render('register.ejs');
    console.log("register page");
});
//--------------------------------------------------------------------------- register a new user and push the data in the array
//--------------------------------------------------------------------------- when logged in you cant return to the login page
function checkAuthenticated(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/login')
}
//---------------------------------------------------------------------------
/*function checkNotAuthenticated(req:any, res:any, next:any) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}*/
//--------------------------------------------------------------------------- listen to port 3000
app.listen(3000);
