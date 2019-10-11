const express = require('express');
const path = require('path');
const jsonDb = require('node-json-db').JsonDB;
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const crypto = require('crypto');
const querystring = require('querystring');
const session = require('express-session');

let db = new jsonDb("./db/tours", true, false);
let usersDb = new jsonDb("./db/users", true, false);
const app = express();
// const users = require('./lib/users');

app.use(express.urlencoded({extended: true}));

app.use('/dist', express.static('dist/'));
app.use('/img', express.static('images/'));
app.use('/src', express.static('src/'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('port', process.env.PORT || 8080);

function loadUser(req, res, next) {
    let currentUser = usersDb.getData("/users").find(obj => obj.user === req.cookies.user);
    if (currentUser) {
        req.user = currentUser;
        next();
    } else {
        res.redirect('/login');
    }
}

app.get('/', loadUser, function (req, res) {
    res.sendFile(path.join(__dirname + '/public/main.html'));
});

app.get('/about', loadUser, function (req, res) {
    res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.post('/login', (req, res) => {
    let userHash = crypto.createHash('md5').update(req.body.login + req.body.pass).digest("hex");
    let user = usersDb.getData("/users").find(obj => obj.user === userHash);
    let responseData = 'err';
    if (user) {
        res.cookie('user', userHash, { maxAge: 28800000, httpOnly: true });
        responseData = user.login;
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(responseData));

});
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/getAllData', loadUser, (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    if (req.user.role === 'admin' || req.user.role === 'supermanager') {
        res.end(JSON.stringify({
            "user": req.user.login,
            "userRole": req.user.role,
            "data": db.getData('/tours')
        }));
    } else if (req.user.role === 'manager'){
        res.end(JSON.stringify({
            "user": req.user.login,
            "userRole": req.user.role,
            "data": db.getData('/tours').filter(obj => obj.manager === req.user.login)
        }));
    }

});





app.get('/getProductsCount', (req, res, next) => {
    let products = (db.getData('/products'));
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({count: products.length}));
    next();
});

app.post('/addProduct', (req, res) => {
    if (!(db.getData('/products').find(obj => obj.productId === req.body.productId))) {
        db.push('/products[]', req.body);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({state: "success", products: db.getData('/products')}));
    } else {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({state: "error", error: "Этот продукт уже находится в корзине"}));
    }
});

app.post('/deleteProduct', (req, res) => {
    let product = db.getData('/products').find(obj => obj.productId === req.body.productId);
    let idx = db.getData('/products').indexOf(product);

    if (product) {
        db.delete(`/products[${idx}]`);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({state: "success", products: db.getData('/products')}));
    } else {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({state: "error", error: "product not found"}));
    }
});

app.post('/increaseCountOfProduct', (req, res) => {
    let product = db.getData('/products').find(obj => obj.productId === req.body.productId);
    let idx = db.getData('/products').indexOf(product);
    let currentCount = db.getData(`/products[${idx}]/productCount`);

    if (product) {
        db.push(`/products[${idx}]/productCount`, +currentCount + 1);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({state: "success", currentProductCount: db.getData(`/products[${idx}]/productCount`)}));
    } else {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({state: "error", error: "can't increase count of product"}));
    }
});

app.post('/decreaseCountOfProduct', (req, res) => {
    let product = db.getData('/products').find(obj => obj.productId === req.body.productId);
    let idx = db.getData('/products').indexOf(product);
    let currentCount = db.getData(`/products[${idx}]/productCount`);

    if (product) {
        db.push(`/products[${idx}]/productCount`, +currentCount - 1);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({state: "success", currentProductCount: db.getData(`/products[${idx}]/productCount`)}));
    } else {
        res.writeHead(400, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({state: "error", error: "can't decrease count of product"}));
    }
});

//Просшуиваем порт на запросы
app.listen(app.get('port'));
