//here we are creating mongoose schema and connecting with mongoURL
const mongoose = require('mongoose')    //here we importing mongoose

const {Schema} = mongoose;  //here we are create object destructuring where we can access / fetched data from online mongoose which connected to mongoURI 
                            //or we can send data from here 
const userSchema = new Schema({ //here we created object for Schema 

    name:{
        type:String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    dob:{
        type:String,
        required: true
    },
    area:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('user', userSchema) //here we creating 'user' as new collection which storing all these schema data and exporting userSchema with it
