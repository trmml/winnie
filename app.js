let express = require('express')
    , app = express();

let bodyParser = require('body-parser')
    , mongoose = require('mongoose')
    , session = require('express-session')
    , flash = require('connect-flash')
    , morgan = require('morgan');

let database = require('./config/database');

let PORT = process.env.PORT || 1337;

mongoose.set('strictQuery', true);
mongoose.connect(database.url);

app.use(morgan('tiny'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));  
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.use(flash());

app.set('trust proxy', 1);
app.use(session({
  secret: 'hunter2',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000, secure: false }
}));

app.use(require('./routes'));

app.listen(PORT, () => {
    console.log(`watching on ${PORT}`)
});

module.exports = app;