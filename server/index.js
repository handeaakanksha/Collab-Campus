// Our dependecies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

//run the server.
app.listen(3002, ()=>{
    console.log('Server is running on port 3002')
})

//create our database (mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'collabcampusdb',
})

app.post('/register', (req, res)=>{
    //we need to get variables sent from the form
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    //Lets create SQL statement to insert the user to the Database table Users
    const SQL = 'INSERT INTO users (email, username, password) VALUES (?,?,?)'//We are going to enter these values through a variable
    const Values = [sentEmail, sentUserName, sentPassword]

    //Query to execute the sql statement stated above
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({message: 'User added!'})
        }
    })
})

app.post('/login', (req, res)=>{
    //we need to get variables sent from the form
    const sentloginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword

    //Lets create SQL statement to insert the user to the Database table Users
    const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'//We are going to enter these values through a variable
    const Values = [sentloginUserName, sentLoginPassword]

    //Query to execute the sql statement stated above
    db.query(SQL, Values, (err, results)=>{
        if(err){
            res.send({error: err})
        }
        if(results.length > 0){
            res.send(results)
        }
        else{
            res.send({message: `Credentials Don't match!`})
        }
        
    })

})