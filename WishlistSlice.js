import { createSlice} from "@reduxjs/toolkit";
const slice=createSlice({
    name:'wishlist',
    initialState:{
       fav:JSON.parse(localStorage.getItem('fav'))||[]
    
    },
    reducers:{
        addFav:(state,action)=>{
            state.fav=[...state.fav,action.payload]
            localStorage.setItem('fav',JSON.stringify(state.fav))
        },
        removeFav:(state,action)=>{
            state.fav=state.fav.filter((item)=>item.id!==action.payload)
               localStorage.setItem('fav',JSON.stringify(state.fav))
        }
    }
   
})
 export const {addFav,removeFav}=slice.actions;
 export default slice.reducer;