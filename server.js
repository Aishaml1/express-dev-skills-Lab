//* import module
import createError from 'http-errors' 
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import methodOverride from 'method-override'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'



const app = express()

// routers imported 
import {router as mainRouter} from './routes/main.js'
import {router as skillsRouter} from './routes/skills.js'


app.set(
    'views',
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

app.use(function(req, res, next) {
    // Add a time property to the req object
    req.time = new Date().toLocaleTimeString()
    next()
})



// logs info about HTTP request
app.use(logger('dev'))

//recognizes the incoming Request Object as a JSON Object
app.use(express.json())

// Same as express.json, but for
// data submitted via a form
app.use(express.urlencoded({ extended: false }))

// Adds properties to req.body for cookies in HTTP
// Request
app.use(cookieParser())

app.use(
express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
    )
)
app.use(methodOverride('_method'))


// mounted routers
// Routers are middleware that map requests 
// to our controller functions which are 
// themselves middleware that ends the 
// request with res.render or res.redirect
//localhost:3000 (homepage)
app.use('/', mainRouter)
//localhost:300/skills 
app.use('/skills', skillsRouter)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
// set locals, only providing error in development
res.locals.message = err.message
res.locals.error = req.app.get('env') === 'development' ? err : {}

// render the error page
res.status(err.status || 500)
res.render('error')
})


export{
    app
}