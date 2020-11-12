const User = require("../models/user")
const fetch = require("node-fetch")
const jwt = require("jsonwebtoken")
exports.facebooklogin = (req,res) => {
    const {userID,accessToken} = req.body

    let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`
    fetch(urlGraphFacebook,{
        method:"GET"
    })
    .then(response => response.json())
    .then(response => {
        const {email,name} = response
        User.findOne({email}).exec((err,user) => {
            if(err){
                return response.status(400).json({
                    error : "something went wrong..."
                })
            } else {
                if(user) {
                    const token = jwt.sign({_id:user._id},(process.env.JWT_SIGNIN_KEY || "sjsdjjsf") , {expiresIn : "7d"})
                    const {_id,name,email} = user

                    res.json({
                        token,
                        user:{_id,name,email}
                    })
                } else {
                    let password = email + (process.env.JWT_SIGNIN_KEY || "sjsdjjsf")
                    let newUser = new User({name,email,password})
                    newUser.save((err,data) => {
                        if(err){
                            return res.status(400).json({
                                error:"something went wrong"
                            })
                        }
                        const token = jwt.sign({_id:data._id},(process.env.JWT_SIGNIN_KEY || "sjsdjjsf") , {expiresIn : "7d"})
                        const {_id,name,email} = data

                        res.json({
                            token,
                            user:{_id,name,email}
                        })
                    })
                }
            }
        })
    })
}