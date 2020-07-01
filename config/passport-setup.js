const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const User = require('../models/model')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{
        done(null,user)
    })
})

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    callbackURL: '/api/google/redirect',
    clientSecret: process.env.CLIENT_SECRET
},(accessToken,refreshToken,profile,done)=>{

    User.findOne({username: profile._json.email}).then(user=>{
        if(user){
            done(null,user)
        }else{
            new User({
                username: profile._json.email,
                password: profile.id,
                name: profile.displayName,
                thumbnail: profile._json.picture,
                purchase: [],
                favourite: []
            }).save().then(user=>done(null,user))
        }
    }).catch(err=>console.log(err))
}))