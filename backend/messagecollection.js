const mongoose=require('mongoose')

const schema = mongoose.Schema

const messageSchema = new schema(
    {
        sender:{
            type: String,
            require: true
        },
        reciever:{
            type: String,
            require: true
        },
        content:{
            type: String,
            require: true
        },
        time:{
            type: Date,
            require: true
        },
     
    }
)

const Message= mongoose.model('Message',messageSchema,'Message')
module.exports = {Message}