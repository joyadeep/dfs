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