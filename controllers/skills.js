//HTTP RESPONSE (HTML)
//import data to controllers
import * as skillsDb from '../data/skills-db.js'

function index(req, res) {
    skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
        skills: skills,
        error: error,
    })
})
}





export{
index

}

//what are we exporting and where is this going ?