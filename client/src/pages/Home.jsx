
import Register from "./Register"
import Login from "./Login"
import {Routes, Route, useNavigate} from 'react-router-dom';
const Home = () => {
   const navigate = useNavigate();
  return (
    <div
    className="Home">
     <div className="row">
          <span onClick={() => navigate('/')}>Sign up</span>
          <span onClick={() => navigate('/login')}>Login</span>
     </div>
     <Routes>
      <Route path="/"  element={<Register />} />
      <Route path="/login" element={<Login />}/>
     </Routes>
    </div>
  )
}

export default Home