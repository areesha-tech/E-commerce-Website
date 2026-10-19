import { configureStore} from "@reduxjs/toolkit";
import slice from './CartSlice'
import favStore from './WishlistSlice'
const CartStore=configureStore({
    reducer:{
        store:slice,
         WishlistStore:favStore
    }
})
export default CartStore