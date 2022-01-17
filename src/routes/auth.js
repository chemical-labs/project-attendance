const express = require('express')
const route = express.Router()
const modelUsers = require('../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

route.post('/login', (req,res) => {
    modelUsers.findOne({ username: req.body.username }, (err, check) => {
        if(check.length == 0){
            res.json({ error: '[!] Username or password is wrong' }).status(301)
        }else{
            bcrypt.compare(req.body.password, check.password, (err, pw) => {
                if(pw){
                    const Token = jwt.sign({
                        name: check.name,
                        class: check.class,
                    })

                    res.headers({ token: Token })
                    res.json({ success: 'Successfully login' })
                }else{
                    res.json({ error: '[!] Username or password is wrong' }).status(301)
                }
            })
        }
    })
})

route.post('/register', (req,res) => {
    modelUsers.findOne({ username: req.body.username }, (err, users) => {
        if(users != null){
            res.json({ error: '[!] Users already registered' }).status(301)
        }else{
            modelUsers.insertMany({ 
                name: req.body.name,
                class: req.body.class,
                username: req.body.username,
                password: req.body.password
            }, (err, done) => {
                if(err){
                    res.json({ error: '[!] Something wrong in server' }).status(501)
                }else{
                    res.json({ success: 'Successfully registered' })
                }
            })
        }
    })
})

route.post('/profile', (req, res) => {
    jwt.verify(req.body.token, req.body.secret, (err, token) => {
        if(err){
            res.json({ error: '[!] Wrong Authorization' }).status(301)
        }else{
            modelUsers.findOne({ username: token.username }, (err, done) => {
                if(err){
                    res.json({ error: '[!] Something on server' }).status(501)
                }else{
                    res.json(done)
                }
            })
        }
    })
})


module.exports = route
