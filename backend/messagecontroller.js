const {Message} = require('./messagecollection')

module.exports.addMessage = async function(req,res){
    try {
        const message= await Message.create(req.body)
        await message.save()
        return res.status(200).json(req.body)
    } catch (error) {
        return res.status(404).json(req.body)
    }
}


module.exports.getMessage= async function(req,res){
    try {
       var k= await Message.find({sender:{$in:[req.body.reciever,req.body.sender]},reciever:{$in:[req.body.reciever,req.body.sender]}})
       //console.log(k)
       return res.status(200).json(k)
    } catch (error) {
        //console.log(error)
        return res.status(404).json(error)
    }
}