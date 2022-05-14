import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginName, logOff } from '../features/cart/cart-slice'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch()
  const loggedinName = useSelector((state) => state.cart.name)
  const  logginStatus = useSelector((state) => state.cart.logginStatus)
  
  const [name, setname] = React.useState(false)
  const navigate = useNavigate();


  React.useEffect(()=>{
    console.log(loggedinName)
  })
 
  return (
    <div>
      {logginStatus === false ?    <><h1>Please enter your name to login</h1>
      <input type="text" placeholder='yourname' onChange={(e)=>{setname(e.target.value)}}/>
      <button disabled = {name === "" || name.length <= 3} onClick={()=>{dispatch(loginName(name)); navigate('/')}}>Enter your name</button></> : <button onClick={()=>{dispatch(logOff())}}>Log off</button>}



    </div>
  )
}

export default Login