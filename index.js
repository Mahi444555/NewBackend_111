const express = require('express')
const app = express();  //calling express method
const cors = require('cors')
app.use(cors({
    origin: "https://frontned-454545.onrender.com",
}));
app.use(express.json()) //if you want to use express with app then write like these
const port = process.env.PORT || 5000

const createConnection = require('./db')     //here we accessing that method from ./db.js page
createConnection(); //calling method

app.get("/", async(req,res)=>{
    res.send("hello world!");
})

app.use('/api',require('./Routes/createUser'))      //accessing that router

app.listen(port, ()=>{
    console.log("server is running on port", port);
})
