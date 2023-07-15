const {User} = require("./usercollection");
const check= require('./check')

module.exports.adduser = async function (req, res) {
  try {
    const user = await User.create(req.body);
    await user.save();
    //console.log(user)
    return res.status(200).json(user);
  } catch (e) {
    console.log("ERROR", e);
    return res.status(404).json({ error});
  }
};

module.exports.allUser = async function (req,res){
try {
  const all= await User.find({})
  var a=[]
  all.forEach(element => {
    d={name:element.firstname,email:element.email,friends:element.friends}
    a.push(d)
  });
  return res.status(200).json(a)
} catch (error) {
  return res.status(404).json({ error});
}

}

module.exports.checkuser=async function(req,res,next)
{
  try{
   const a=await check.checkUser(req.body)
   if (a==0)
   {+
    next()}
   else
   {return res.status(404).json({a})}
  }
  catch(e){
    console.log('Error',e);
    return res.status(404).json('abc')
  }
}

