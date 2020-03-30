const express = require ('express')
const app = express()
const bodyParser    = require('body-parser')
const path = require('path')
const hbs  =require('hbs')
const cors      = require('cors')
const http          = require('http')
const PORT = process.env.PORT || 8080
let server  = http.createServer(app);

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
//set path view
app.set('views', path.join(__dirname, 'views'))

//view enggine
app.set('view engine', 'hbs')
//app.engine('hbs', hoganMiddleware.__express)
//app.use(express.static(path.join(__dirname, 'public')))
app.use('/assets',express.static(__dirname + "/public"));

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

app.listen(PORT, () => {
    console.log(`Application server started on port: ${PORT}`)
})