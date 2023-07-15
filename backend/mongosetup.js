const mongoose = require('mongoose')

const connection_string = "mongodb+srv://tiger:tiger@cluster0.elt1v.mongodb.net/signin"
module.exports.connect = function(auto_reconnect){
    console.log("Trying to connect to MONGODB");
    
    var dbOptions = {useNewUrlParser: true, useUnifiedTopology: true }
    console.log(dbOptions)
    try{
        mongoose.connect(connection_string, dbOptions)
        var db = mongoose.connection;
        db.on('connecting', function() {
            console.log('connection to MongoDB...')
        })
        db.on('error', function(error) {
            console.log('Error in MongoDB Connection:' + error)
            mongoose.disconnect();
        })
        db.on('connected', function() {
            console.log('MongoDB connected!');
        });
        db.once('open', function() {
            console.log('MongoDB connection opened!');
        });
        db.on('reconnected', function() {
            console.log('MongoDB reconnected!');
        });
        db.on('disconnected', function() {
            console.log('MongoDB disconnected!');
            mongoose.connect(connection_string, dbOptions);
    });
    }catch(e){
        console.log("MongoDB Connection Error : "+e)
    }

}