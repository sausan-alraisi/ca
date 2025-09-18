// const {getname,getage} = require("./user")

import { getname,getage } from "./user.js"

// getname("ahmed")

// getage(20)

// fs.readFile("./user.js","utf8",(error,res)=>{
//     console.log(res)
// })

// let users = [
//     "ahmed",
//     "mohamed",
//     "eslam"
// ]


// users.forEach((user)=>{
//     fs.writeFile(`${user}.json`,`${user}`,(error)=>{
//         if(error){
//              console.log(error)
//         }else {
//             console.log("success")
//         }
//     })
// })


// import fs from 'node:fs'

// let server =  http.createServer((req,res)=>{
//     let path = url.parse(req.url,true)
//     res.writeHead(200,{'content-type':'text/html'})

//     if(path.pathname == "/"){
//         fs.readFile("home.html","utf8",(error,data)=>{
//             res.end(data)
//         })
//     }else if(path.pathname == "/about"){
//         fs.readFile("about.html","utf8",(error,data)=>{
//             res.end(data)
//         })
//     }else {
//         res.end("<h1>not found</h1>") 
//     }
// })

// server.listen(3000,()=>{
//     console.log("server is run")
// })



import http from 'node:http'
import  url  from "node:url"
import mysql2 from "mysql2"

let connection =  mysql2.createConnection({
    host:"localhost",
    password:"",
    user:"root",
    database:"oman"
})
let server =  http.createServer((req,res)=>{
    let path = url.parse(req.url,true)
    res.writeHead(200,{'content-type':'application/json'})

    if(path.pathname == "/"){
        connection.query("SELECT * FROM `users`",(error,data)=>{
            if(error){
                console.log(error)
            }

            res.end(JSON.stringify(data))
        })
    }
})

server.listen(3000,()=>{
    console.log("server is run")
})