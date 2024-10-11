const mongoose = require("mongoose");

const connectDB = ()=>{
    mongoose.connect("mongodb://localhost:27017/",{
        dbName:"NewLetter"
    }).then((c)=>console.log(`db connected with ${c.connection.host}`))
    .catch((e)=>console.log(e));
};  
module.exports = connectDB;