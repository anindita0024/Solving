const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');


/////......for register........//////

router.post("/register",async (req,res) =>{
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.passwoard, salt)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            passwoard:hashedPass,
        });

        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json(error)
    }
});


////.....for login...../////

router.post("/login", async(req,res) =>{
    try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(400).json("wrong Crandential")

        const validated = await bcrypt.compare(req.body.passwoard , user.passwoard)
        !validated && res.status(400).json("wrong Crandential")


        const  {passwoard, ...others} = user._doc;
     
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router