import mysql2 from "mysql2"

let connection =  mysql2.createConnection({
    host:"localhost",
    password:"",
    user:"root",
    database:"oman"
})


export default connection