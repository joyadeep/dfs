import {createSlice,PayloadAction} from '@reduxjs/toolkit'


const initialState={
    totalPrice:0
}

export const totalPriceSlice=createSlice({
    name:"totalPrice",
    initialState,
    reducers:{
        updatePrice:(state,action:PayloadAction<number>)=>{
            state.totalPrice+=action.payload;
            console.log(state);
        }
    }
})


export const {updatePrice}=totalPriceSlice.actions;
export default totalPriceSlice.reducer;