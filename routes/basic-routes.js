const router = require('express').Router()
const passport = require('passport')
const bcrypt = require('bcrypt')
const User = require('../models/model')


router.get('/logout',(req,res)=>{
    if(!req.user){
        req.session.user = null
    }else{
        req.logout()
    }
    res.redirect('/')
})

router.get('/info',(req,res)=>{
    if(!req.session.user){
        res.send({
            username: req.user.username,
            name: req.user.name,
            purchase: req.user.purchase,
            favourite: req.user.favourite
        })
    }else{
        User.findOne({username:req.session.user.username}).then(user=>{
            req.session.user={
                username: user.username,
                name: user.name,
                favourite: user.favourite,
                purchase: user.purchase
            }
            res.send(req.session.user)
        })
    }
})

router.post('/login',(req,res)=>{
    User.findOne({username:req.body.username}).then(user=>{
        if(!user){
            res.redirect('/api/fail')
        }else{
            bcrypt.compare(req.body.password,user.password,(err,result)=>{
                if(result){
                    req.logout()
                    req.session.user = {
                        username: user.username,
                        name: user.name,
                        thumbnail: user.thumbnail,
                        purchase: user.purchase,
                        favourite: user.favourite
                    }
                    res.redirect('/profile')
                }else{
                    res.redirect('/api/wrong-password')
                }
            })
        }
    }).catch(err=>console.loge(err))

})


router.post('/signup/user',(req,res)=>{
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        User.findOne({username:req.body.username}).then(user=>{
            if(user){
                res.redirect('/api/error')
            }else{
                new User({
                    username: req.body.username,
                    password: hash,
                    name: req.body.name,
                    purchase: [],
                    thumbnail: 'n/a',
                    favourite: []

                }).save().then(user=>res.redirect('/'))
            }
        }).catch(err=>console.log(err))
    })
})

router.post('/purchase',(req,res)=>{
    User.update({username:req.body.username},{
        $push: {purchase:{
            amount: req.body.value,
            date: req.body.date
        }}
    }).catch(err=>console.log(err))
})

router.post('/favourite',(req,res)=>{
    User.findOne({username:req.body.user}).then(user=>{
        if(user.favourite.includes(req.body.name)){

        }else{
            User.update({username:req.body.user},{
                $push: {favourite: req.body.name}
            }).catch(err=>console.log(err))
        }
    }).catch(err=>console.log(err))
})

router.post('/favourite/remove',async (req,res)=>{
    await User.findOne({username:req.body.user}).then(user=>{
            User.update({username:req.body.user},{
                $pull: {favourite: req.body.name}
            }).catch(err=>console.log(err))

    }).catch(err=>console.log(err))
})


router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.get('/fail',(req,res)=>{
    res.render('username')
})
router.get('/error',(req,res)=>{
    res.render('account')
})

router.get('/wrong-password',(req,res)=>{
    res.render('password')
})


router.get('/google',passport.authenticate('google',{
    scope: ['https://www.googleapis.com/auth/plus.login',"email"],
    prompt: "select_account"
}))

router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.redirect('/profile')
})

module.exports = router