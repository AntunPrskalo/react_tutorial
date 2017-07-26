var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var routes = require('./routes/index');

// Init express
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set port
app.set('port', (process.env.PORT || 3000));

// Routes
app.use('/', routes);

app.listen(app.get('port'), function()
{
    console.log("------------------------------------------");
    console.log('- Server started on port '+ app.get('port'));
});