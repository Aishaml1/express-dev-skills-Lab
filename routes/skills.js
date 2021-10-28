//HTTP REQUEST
import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"
const router = Router()


// route to localhost:3000/skills
router.get('/', skillsCtrl.index)






export{
    router
}