import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value : [],
    name : "",
    logginStatus : false
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addItem : (state, action)=>{
            let currentArray = state.value
            state.value = [...currentArray, action.payload]
            
        },
        removeItem : (state, action)=>{
           state.value = state.value.filter((item)=>{
               return(
                   item.product_name !== action.payload.product_name
               )
           })
        },
        loginName : (state, action)=>{
            state.name = action.payload
            state.logginStatus = true
        },
        logOff : (state)=>{
            
            state.logginStatus = false;
            state.value.length = 0;
            state.name = ""
        }
    }
})

export const { addItem, removeItem ,loginName, logOff} = cartSlice.actions

export default cartSlice.reducer