import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import data from '../Components/Data'
import { addItem } from '../features/cart/cart-slice'
import '../Styles/Home.css'

function Home() {
  
  const dispatch = useDispatch()
  const  logginStatus = useSelector((state) => state.cart.logginStatus)
  
  return (
    <div className="foodArea">
      {data.map((item) => {
        return (
          <div className="foodCards" key={item.product_id}>
            {item.product_name}
            <img
              style={{ height: '15em', width: 'auto', display: 'inline-block' }}
              src={item.product_image}
              alt={item.product_name}
            />
            <h4>{item.product_price}</h4>

            {logginStatus === false ? <button onClick={()=>{alert("please login")}}>Please login to add Item</button> : <button name={item.product_name} onClick={()=>{dispatch(addItem(item))}}>
              AddItem
            </button>}
          </div>
        )
      })}
    </div>
  )
}

export default Home
