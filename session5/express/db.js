import mysql2 from 'mysql2'

let connection = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"oman"
})

export default connection