const {User}=require('./usercollection')
const validEmail = new RegExp('[a-zA-Z_][a-zA-Z0-9_]+[@][a-zA-Z]+[.][a-zA-Z]+');
const validName = new RegExp('[a-zA-Z][a-zA-Z. ]+');
const validPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');

module.exports.checkUser = async function (req)
{
    k=0;
    if (!validEmail.test(req.email) || req.email===''|| ! (await checkemail(req.email)) )
    {k+=1;}
    if(!validPassword.test(req.password) || req.password==='')
    {k+=1;}
    if(!validName.test(req.firstname) || req.firstname==='')
    k+=1;
    if(!validName.test(req.lastname) || req.lastname==='')
    k+=1
    console.log("here",k)
    return k;
}

checkemail= async function(data)
{
    try{
    var k = await User.findOne({email:data})
    if(k==null)
    {
    console.log('true')
        return true
}
    else
    {  console.log('false',k)
        return false
       }
        
}
    catch(err){
        console.log(err)
    }
}