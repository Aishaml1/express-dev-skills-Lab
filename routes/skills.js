//HTTP REQUEST
import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"
const router = Router()


// index is in the views folder
// index is the html page where skills are listed  
// index = html in the views folder
// localhost:3000/skills 
router.get('/', skillsCtrl.index)
//localhost:3000skills/new
router.get('/new', skillsCtrl.new)
// localhost:3000/index/id (786578)
router.get('/:id', skillsCtrl.show)
// new skill posted on localhost:3000/skills
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)

export{
    router
}