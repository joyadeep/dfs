import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { order } from '../../interfaces/foodInterface'

interface orderSliceState{
    orderlist:order[]
}

const initialState:orderSliceState={
    orderlist:[]
}

export const orderSlice = createSlice({
    name:"orderSlice",
    initialState,
    reducers:{
        setOrders:(state,action:PayloadAction<order[]>)=>{
            // state.orderlist=[...state.orderlist,action.payload]
            console.log("order updated");
            console.log(state.orderlist);
            
        },
        getOrders:(state)=>{
            console.log("got all orders")
        },

        serveOrder:(state,action:PayloadAction<number> )=>{
            console.log("served orders")
        }
    }
})


export const {getOrders,serveOrder}=orderSlice.actions;
export default orderSlice.reducer;