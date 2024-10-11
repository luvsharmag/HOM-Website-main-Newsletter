import mongoose from "mongoose";

export const connectDB = ()=>{
    mongoose.connect(process.env.databaseUrl,{
        dbName:"NewLetter"
    }).then((c)=>console.log(`db connected with ${c.connection.host}`))
    .catch((e)=>console.log(e));
};  