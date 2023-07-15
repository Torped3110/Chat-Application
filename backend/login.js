const {User} = require('./usercollection')

module.exports.checklogin = async function (req,res){
    var k = await User.findOne({email:req.body.username,password:req.body.password})
    try{
    if(k!=null)
    {
       // console.log(req.body)
        
    //res.send(data={k})
    return res.status(200).json(k)
    }
    else
    {
        //console.log('error',req.body.username)
        return res.status(404).json('error')}
}
catch(e){
    return res.status(404).json('error')
}

}