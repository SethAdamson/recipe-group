//--------------Requirements-------------//

require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , checkUserSession = require('./middleware/checkUserSession')
    , ctrl = require('./controller')
    , unirest = require('unirest')
    , cors = require('cors');
const app = express();

//--------------DotEnv----------//



const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING,
    MASHAPE_KEY,
    MASHAPE_HOST,
    SPOON_API
} = process.env;

//--------------Middleware-------------//

app.use(express.static(`${__dirname}/../build`));

app.use(cors());

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
});

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(checkUserSession)

//--------------Endpoints-------------//

var apiHeaders = {'headers': {'X-Mashape-Key': MASHAPE_KEY, 'X-Mashape-Host': MASHAPE_HOST}}

app.post('/api/login', ctrl.loginUser)
app.post('/api/register', ctrl.registerUser)

app.get('/recipe/random', (req, res) => {
    unirest.get(`${SPOON_API}/search?number=1&query=popular&type=main+course&instructionsRequired=true`)
    .header("X-Mashape-Key", MASHAPE_KEY)
    .header("X-Mashape-Host", MASHAPE_HOST)
    .end(function (result) {
      res.status(200).send(result.body);
    });
})
app.get('/recipe/lookup/:id', (req, res) => {
    unirest.get(`${SPOON_API}/${req.params.id}/information`)
    .header("X-Mashape-Key", MASHAPE_KEY)
    .header("X-Mashape-Host", MASHAPE_HOST)
    .end(function (result) {
      res.status(200).send(result.body);
    });
})


//--------------Listening-------------//

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});




