"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//load in environment variables
//array for local storage an test only
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var bcrypt = require('bcrypt'); // allow to hash passwords and compare hashed passwords
var passport = require('passport'); // passport is used for authentication/ local is je just to use UN and PW to login
var flash = require('express-flash');
var session = require('express-session');
var initializePassport = require('./passport.config');
initializePassport(passport, function (email) {
    users.find((function (user) { return user.email === email; }), //finding the user based on email
    function (id) { return users.find(function (user) { return user.id === id; }); });
    console.log(email);
    console.log();
});
var users = []; // empty array for the user data because we don't want to use a database yet
app.set('view-engine', 'ejs');
app.use(express_1.default.urlencoded({ extended: false })); // make sure you can access the data in the req instead of the post methode
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false // do you want to save an empty value in the session and we dont want that
}));
app.use(passport.initialize());
app.use(passport.session());
//--------------------------------------------------------------------------- homepage
app.get('/', checkAuthenticated, function (req, res) {
    res.render('index.ejs', { name: req.body.name });
});
console.log("welcoming text");
//--------------------------------------------------------------------------- login
app.get('/login', function (req, res) {
    res.render('login.ejs');
    console.log("login page");
});
//--------------------------------------------------------------------------- login post
app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true // let us have a flash message
}));
//--------------------------------------------------------------------------- register
app.get('/register', function (req, res) {
    res.render('register.ejs');
    console.log("register page");
});
//--------------------------------------------------------------------------- register a new user and push the data in the array
app.post('/register', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var hashedPassword, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, bcrypt.hash(req.body.password, 10)];
            case 1:
                hashedPassword = _b.sent();
                users.push({
                    id: Date.now().toString(),
                    name: req.body.name,
                    email: req.body.email,
                    password: hashedPassword // the hashed password
                });
                res.redirect('/login'); // redirects to login page when a account is registered
                console.log("to login page");
                return [3 /*break*/, 3];
            case 2:
                _a = _b.sent();
                res.redirect('/register'); // if something fails you get redirected to the register page
                console.log("error returned to redirect");
                return [3 /*break*/, 3];
            case 3:
                console.log(users); // print the array of user data in the console
                return [2 /*return*/];
        }
    });
}); });
//--------------------------------------------------------------------------- when logged in you cant return to the login page
function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
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
