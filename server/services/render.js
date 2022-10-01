// Route to home 

exports.homeRoutes = (req,res)=>{
    // res.send('Hello World!')
    res.send({"users":["First","Second","Third","Fourth"]})
    // res.render('index')
}

// Route to user

exports.add_user = (req,res)=>{
    // res.send('Hello World!')
    // res.send({"users":["First","Second","Third","Fourth"]})
    res.render('add_user')
}