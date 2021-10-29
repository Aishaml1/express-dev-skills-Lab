// all data goes into controllers 

const skills = [ 
    {text: 'JavaScript' , learned:true, _id:786578 },
    {text: 'Python' , learned:false, _id:904859 },
    {text: 'Node', learned:true, _id:499574},
    {text: 'PostgreSQL', learned: false, _id:456382}
]


const find = (conditions, callback) => {
    // see if this works, if not, execute the code in the catch block
    try {
      // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
        throw new TypeError('Pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)
      // deal with errors
    } catch (error) {
    console.log(error)
    callback(error, [])
    }
}

const findById = (id, callback) =>{
  try {
    //parse string and return an integer.
    const skill = skills.find(skill => skill._id === parseInt(id))
    console.log(skill)
    //{ text: 'JavaScript', learned: true, _id: 786578 }
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    return callback(error, null)
  }
}

//skill learned will return false
//push skill
function create(skill, callback) {
  console.log(skill)
  skill._id = Date.now() % 1000000
  skill.learned = false
  console.log(skill.learned)
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the skill object
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const skillDeleted = skills.splice(idx, 1)
    if (!skillDeleted.length ) throw new Error ('No skill was deleted')
    return callback(null, skillDeleted[0])
  } catch(error) {
    return callback(error, null)
  }
}

export{
    find,
    findById,
    create,
    findByIdAndDelete
    
}