// all data goes into controllers 

const skills = [ 
    {type: 'JavaScript' , learned:true, _id:786578 },
    {type: 'Python' , learned:false, _id:904859 },
    {type: 'Node', learned:true, _id:499574},
    {type: 'PostgreSQL', learned: false, _id:456382}
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
    callback(error, [])
    }
}


export{
    find
}