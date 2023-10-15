import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
     const [values, setValues] = useState({
          name: '',
          email:'',
          password: ''
     })

     const updateValues = ( event) => {
          if(event.target.name === "email"){
               setValues({...values, email:event.target.value})
          }else if(event.target.name === "name"){
               setValues({...values, name:event.target.value})
          } else if(event.target.name === "password"){
               setValues({...values, password:event.target.value})
          }
     }
     const navigate = useNavigate();


     const handleSignup = (e) => {
          e.preventDefault();
          axios.post('http://localhost:3000/register', values)
          .then((res) => {
               if(res.data.status === "success"){
                    alert("successfully logged in");
                    navigate('/login');
               }else{
                    alert(res.data.Error);
               }
          });
          //setValues({name: '', email: '', password :''})
     }
  return (
    <div className="registration form">
     <h1>Register here</h1>
     <form onSubmit={handleSignup}>
          <div className="group">
               <label htmlFor="name">username: </label>
               <input type="text" name="name" id="name" onChange={(e) =>updateValues(e)} required />
          </div>
          <div className="group">
               <label htmlFor="email">email: </label>
               <input type="email" name="email" id="email" onChange={(e) =>updateValues(e)} required  />
          </div>
          <div className="group">
               <label htmlFor="password">password</label>
               <input type="password" name="password" id="password" onChange={(e) =>updateValues(e)} required />
          </div>
          <div className="submit"><button type="submit">Sign up</button></div>
     </form>
    </div>
  )
}

export default Register