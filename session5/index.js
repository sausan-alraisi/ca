import http from 'node:http'
import  url  from "node:url"
import { getusers } from './user.js'

let server =  http.createServer((req,res)=>{
    let path = url.parse(req.url,true)
    res.writeHead(200,{'content-type':'application/json'})
    if(path.pathname == "/"){
        getusers((data)=>{
            res.end(JSON.stringify(data))
        })
    }
    else if(path.pathname == "/createuser"){
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string and append
        });
        console.log(body)
        // createuser()
    }
})

server.listen(3000,()=>{console.log("server is run")})