import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import  connection from './database.js';
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors(
     {
          origin: ["http://localhost:5173"],
          methods: ["POST", "GET"],
          credentials: true
     }
));
app.get('/', (req, res) => {
     res.send('this is your backend');
});

app.post('/register', (req, res)=> {
     const sql = 'insert into users(`name`, `email`, `passowrd`) values (?, ?, ?)';
     bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
          if(err) return res.json({Error: "Error hashing the password"});

          const values = [
               req.body.name,
               req.body.email,
               hash
          ];

          connection.query(sql, values, (err, result) => {
               if(err) return res.json({Error: "Error registering you"});
               return res.json({status: "success"});
          })
     })
});

app.post('/login', (req, res) => {
     const sql = 'select * from users where email = ?';
     connection.query(sql, [req.body.email], (err, data) => {
          if(err) return res.json({Error: "Error logging in"});
          if(data.length > 0){
               bcrypt.compare(req.body.password.toString(), data[0].passowrd, (error, responce)=> {
                    if(error) return res.json({Error: "error comparing passwords"});
                    if(responce) {
                         const name = data[0].name;
                         const token = jwt.sign({name}, "dushime-bro", {expiresIn: '1d'} );
                         res.cookie("token", token);
                         return res.json({status: "success"});
                    }else{
                         return res.json({status:"invalid password"});
                    }
               });
          }else{
               return res.json({Error: "Account with this email does not exist"});
          }
     })
})

app.listen(3000, () => console.log("app running on 3000"));