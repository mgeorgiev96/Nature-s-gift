
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const passport = require('passport')
const passportSetup = require('./config/passport-setup')
const cookieSession  = require('cookie-session')
const path = require('path')
const basicRouter = require('./routes/basic-routes')
const profileRouter = require('./routes/profile-route')

mongoose.connect(process.env.MONGO_DB,{ useUnifiedTopology: true , useNewUrlParser: true})
app.set('view engine' , 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/profile',profileRouter)
app.use('/api',basicRouter)




app.get('/',(req,res)=>{
    res.render('login')
})

app.use(express.static(path.join(__dirname,'client/public')))



app.listen(PORT,()=>`Server running on ${PORT}`)