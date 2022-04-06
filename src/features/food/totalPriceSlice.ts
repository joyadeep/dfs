import {createSlice,PayloadAction} from '@reduxjs/toolkit'


const initialState={
    totalPrice:0
}

export const totalPriceSlice=createSlice({
    name:"totalPrice",
    initialState,
    reducers:{
        resetPrice:(state)=>{
            state.totalPrice=0
        },
        updatePrice:(state,action:PayloadAction<number>)=>{
            state.totalPrice+=action.payload;
            // console.log(state);
        },
        decreasePrice:(state,action:PayloadAction<number>)=>{
            state.totalPrice-=action.payload;
        }

    }
})


export const {updatePrice,resetPrice,decreasePrice}=totalPriceSlice.actions;
export default totalPriceSlice.reducer;