//HTTP REQUEST
import { Router } from 'express'
const router = Router()

//localhost:3000/ (main page)
router.get('/', function(req, res, next){
res.render('main',{title:'Building Skills'})
})

export{
    router
}