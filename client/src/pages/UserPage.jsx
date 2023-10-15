//import { useState } from "react"

const UserPage = () => {
  //const [auth, setAuth] = useState(false);
      const handleLogout = () => {
      
  }
  return (
    <div>
      <h2>You are allowed to view this page</h2>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default UserPage