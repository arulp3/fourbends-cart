import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { removeItem } from '../features/cart/cart-slice'
import '../Styles/Home.css'



function Cart() {
  const cartCount = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()
  const price = cartCount.map((item)=>item.product_price)
  const totalPrice = price.reduce((a, b) => a + b, 0);

  // const counts = {}
  // cartCount.forEach((x) => {
  //   counts[x] = (counts[x] || 0) + 1
  // })
  // const keys = Object.keys(counts)
  // const vals = Object.values(counts)
  React.useEffect(() => {
    // console.log(keys)

    console.log(totalPrice)
  }, [])

  return (
    <div className="cartItems">
      <table>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
        {cartCount.map((item) => {
          return (
            <tr>
              <td>{item.product_name}</td>
              <td>{item.product_price}</td>
              <td><button onClick={()=>{dispatch(removeItem(item))}}>Remove</button></td>
            </tr>
          )
        })}
        <tr>
              <td>Total Value : {totalPrice}</td>
              
            </tr>
          
      </table>
    </div>
  )
}

export default Cart
