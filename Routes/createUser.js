//here we are creating router for user.js schema 
const express = require('express')
const User = require('../models/user')  //here we accessing user Schema from that folder giving path here
const router = express.Router(); //its same works like in mongodb we write const app = express() and app.post()...methods
//so here in mongoose we write/use const router= express.Router() and router.post()...

router.post("/signup", async (req, res) => {

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob,
            area: req.body.area

        })
        res.status(200).send({ msg: "successfully sended" })

    } catch (error) {
        console.log(error)
        res.status(400).send({ msg: "something went wrong" })
    }
})

module.exports = router