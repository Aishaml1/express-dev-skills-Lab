const skills = [
    {type: JavaScript , learned:true, _id:786578 },
    {type: Python , learned:false, _id:904859 },
    {type: node.js , learned:true, _id:099574},
    {type: PostgreSQL, learned: false, _id:456382}
]

const find = (conditions, callbacks) => {
    try{
        if (!(conditions instanceof Object)){
            throw new TypeError('Pass in an Object')
        }
        if (Object.keys(conditions).length === 0) return callback(null, skills)
    }
    catch (error) {
    callback(error, [])

    }
}

export{
    find
}