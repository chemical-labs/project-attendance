// Copyright by fajar firdaus
// Do not touch anything in my code, cause i spent a lot of time completing this project 

const express = require('express')
const route = express.Router()
const jwt = require('jsonwebtoken')
const modelUsers = require('../models/Users')
const modelAttendance = require('../models/')
 
route.post('/add', (req,res) => {
    jwt.verify(req.body.token, req.body.secret, (err, token) => {
        if(err){
            res.json({ error: '[!] Wrong Authorization' }).status(501)
        }else{
            modelUsers.findOne({ username: token.username }, (err, users) => {
                if(users == null && err){
                    res.json({ error: '[!] Users not found!' }).status(301)
                }else{
                    modelAttendance.insertMany({
                        username: token.username,
                        name: token.name,
                        class: token.class,
                        day: new Date().getDay(),
                        month: new Date().getMonth(),
                        years: new Date().getFullYear(),
                        date: new Date().toDateString()
                    }, (err, done) => {
                        if(err){
                            res.json({ error: '[!] Something Wrong in server' }).status(501)
                        }else{
                            res.json({ success: 'Successfully making attendance' })
                        }
                    })
                }
            })
        }
    })
})

route.post('/update', (req,res) => {
    jwt.verify(req.body.token, req.body.secret, (err, token) => {
        if(err){
            res.json({ error: "[!] Wrong Authorization" }).status(501)
        }else{

        }
    })
})

module.exports = route 