import express from 'express';
const app = express();
app.set('view-engine', 'ejs');
app.get('/', (res, req) =>{
    res.render('index.ejs');
});

app.get('/login', (res, req) =>{
    res.render('login.ejs');
});

app.get('/register', (res, req) =>{
    res.render('register.ejs');
});