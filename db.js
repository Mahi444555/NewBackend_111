//here we are creating mongoose database server and connecting to mongo online mongoURL
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
//  const mongoURL = "mongodb+srv://Home444:Home444@cluster0.dst8lw4.mongodb.net/My_Shop?retryWrites=true&w=majority"
const mongoURL = process.env.MONGO_URL
//now createConnection method to established the connection
const createConnection = async ()=>{
    await mongoose.connect(mongoURL,{useNewUrlParser:true, useUnifiedTopology:true}, async(err,result)=>{
        if(err)
            console.log("something went wrong", err)
        else{
            console.log("Connected Successfully")

            const fetched_data = await mongoose.connection.db.collection("book_flat")
                fetched_data.find({}).toArray(function(err,data){
                    if(err)
                        console.log(err)
                    else
                    console.log()
                    // console.log(data)
                })
        }
    })
}
module.exports= createConnection;