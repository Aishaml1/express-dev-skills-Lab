//* import module
import createError from 'http-errors' 
//
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