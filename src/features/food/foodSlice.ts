import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import foods from '../../api/fooditem'
import {food} from '../../interfaces/foodInterface'

interface listSliceState{
    foodlist:food[]
}

const initialState:listSliceState={
    foodlist:foods
}

export const foodSlice=createSlice({
    name:'foodlist',
    initialState,
    reducers:{
        addFood:(state)=>{
            state.foodlist=foods
        },
        removeFood:(state,action:PayloadAction<number>)=>{
            console.log("food Removed !!");
        },
        filterFood:(state )=>{
            console.log("fitering food items...");
        }
    }
})


export const {addFood,removeFood}=foodSlice.actions;
export default foodSlice.reducer;