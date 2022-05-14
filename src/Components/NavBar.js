import React from 'react'
import '../Components/NavBar.css'
import {Link, useNavigate} from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import { useSelector } from 'react-redux'


const NavBar = () => {

  const  cartValue = useSelector((state) => state.cart.value)
  const  loggedinName = useSelector((state) => state.cart.name)
  const  logginStatus = useSelector((state) => state.cart.logginStatus)

  const navigate = useNavigate()
  
  return (
    <div className='navbar'>
      <Nav
>
  <Nav.Item>
    <Nav.Link><Link to="/">{loggedinName === "" ? "Please login" : loggedinName}</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link><Link to="/cart">Cart-{cartValue.length}</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    {logginStatus === false ? <Nav.Link><Link to="/login">Login</Link></Nav.Link> : <Nav.Link><li style={{listStyle : "none"}} onClick={()=>{navigate("/login")}}>logoff</li></Nav.Link>}
  </Nav.Item>
  <Nav.Item>
    
  </Nav.Item>
</Nav>
    </div>
  )
}

export default NavBar