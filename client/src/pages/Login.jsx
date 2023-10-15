import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Login = () => {
     axios.defaults.withCredentials = true;
     const navigate = useNavigate();
     const [values, setValues] = useState({
          email:'',
          password: ''
     })

     const updateValues = ( event) => {
          if(event.target.name === "email"){
               setValues({...values, email:event.target.value})
          } else if(event.target.name === "password"){
               setValues({...values, password:event.target.value})
          }
     }  
     
     const handleLogin = (e) => {
          e.preventDefault();
          axios.post('http://localhost:3000/login', values)
          .then((res) => {
               if(res.data.status === "success"){
                    navigate('/userpage');
               }else{
                    alert(res.data.Error);
               }
          });
          //setValues({email: '', password :''});
     }
  return (
    <div className="login form">
     <h1>Login</h1>
     <form onSubmit={handleLogin}>
          <div className="group">
               <label htmlFor="email">email: </label>
               <input type="email" name="email" id="email" onChange={(e) =>updateValues(e)} />
          </div>
          <div className="group">
               <label htmlFor="password">Password: </label>
               <input type="password" name="password" id="password" onChange={(e) =>updateValues(e)} />
          </div>
          <div className="submit"><button>Login</button></div>
     </form>
    </div>
  )
}

export default Login