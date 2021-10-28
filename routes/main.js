//HTTP REQUEST
import { Router } from 'express'
const router = Router()

//localhost:3000/ (main page)
router.get('/', function(req, res, next){
res.render('main', {Question:'What Are Your Skills ?'})
})


export{
    router
}