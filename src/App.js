import './App.css'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/Components/Home'
import Cart from '../src/Components/Cart'
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        </Routes>
      
      </Router>
      
    </div>
  )
}

export default App
