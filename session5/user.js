import connection from './db.js'

export let getusers = (cl)=>{
    connection.query("SELECT * FROM `users`",(error,data)=>{
        if(error){
            console.log(error)
        }
        cl(data)
    })


}


// export let createuser = (name,email,password)=>{
//     connection.query("INSERT INTO `users` (`name`,`email`,`password`) VALUES (?,?,?)",[name,email,password],(error,data)=>{
//         if(error){
//             console.log(error)
//         }

//         res.end(JSON.stringify({msg:"success"}))
//     })
// }