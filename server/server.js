const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const server = express();
server.use(cookieParser());
server.use(express.static(path.resolve('../client')));

server.get('/cookies', (req, res) => {
    console.log(req.cookies);
    res.send('Grandma sent me some cookies!')
})

server.get('/', (req, res) => {
    if (req.cookies.role == 'admin') {
        res.redirect('/admin');
    } else {
        res.sendFile(path.resolve('../client/index.html'));
    }
})

server.get('/admin', (req, res) => {
    if (req.cookies.role !== 'admin') {
        res.redirect('/');
    } else {
        res.sendFile(path.resolve('../client/admin.html'));
    }
})

server.listen(3000);