import './App.css';
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    this ie me
    <Routes>
      <Route path='/*' element={<Home />} /> 
      <Route path='/userpage' element={<UserPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
