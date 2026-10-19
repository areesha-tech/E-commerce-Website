import {createSlice} from '@reduxjs/toolkit'
export const CartSlice=createSlice({
    name:"cart",
    initialState:{
     cart:JSON.parse(localStorage.getItem("cartItem"))||[],
        products:JSON.parse(localStorage.getItem("products"))||[],
        
    },
      

    reducers:{
        addToCart:(state,action)=>{
        state.cart=[...state.cart,action.payload]
        localStorage.setItem('cartItem',JSON.stringify(state.cart))
        },
          deleteItem:(state,action)=>{
            const {id}=action.payload
            state.cart=state.cart.filter((item)=>item.id!==id);
        },
          changeQty:(state,action)=>{
            let {finalqty,id}=action.payload;
            state.cart=state.cart.map((item)=>item.id===id ? {...item,quantity:finalqty}:item)
              localStorage.setItem('cartItem',JSON.stringify(state.cart))
              
        },
        setCart:(state,action)=>{
         state.products=action.payload;
         state.products=state.products.map((item)=>({...item,quantity:1}))
            localStorage.setItem('products',JSON.stringify(state.products))
        }
 
    }
    
})
export const {addToCart,deleteItem,changeQty,setCart}=CartSlice.actions
export default CartSlice.reducer

