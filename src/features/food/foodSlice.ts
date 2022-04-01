import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import React from 'react'
import foods from '../../api/fooditem'
import {food} from '../../interfaces/foodInterface'

interface listSliceState{
    foodlist:food[]
}

const initialState:listSliceState={
    foodlist:[]
}

export const foodSlice=createSlice({
    name:'foodlist',
    initialState,
    reducers:{
        addFood:(state)=>{
            state.foodlist=foods
            // [
                // ...state.foodlist,
                
                // {
                    
                    // id:1,
                    // category:"breakfast",
                    // name:"fried rice",
                    // image:"image 1",
                    // availableTime:"9-5",
                    // rate:100,
                    // initialQty:40,
                    // availableQty:10,
                    // price:100
                // }
            // ]
            // console.log("food added !!");
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