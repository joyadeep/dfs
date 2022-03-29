import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import foods from '../../api/fooditem'
export interface list{
    id:number;
    category:string;
    name:string;
    image:string;
    availableTime:string;
    rate:number;
    initialQty:number;
    availableQty:number;
    price:number;
}

interface listSliceState{
    foodlist:list[]
}

const initialState:listSliceState={
    foodlist:[]
}

export const foodSlice=createSlice({
    name:'foodlist',
    initialState,
    reducers:{
        addFood:(state)=>{
            state.foodlist=[
                ...state.foodlist,{
                    id:1,
                    category:"breakfast",
                    name:"fried rice",
                    image:"image 1",
                    availableTime:"9-5",
                    rate:100,
                    initialQty:40,
                    availableQty:10,
                    price:100
                }
            ]
            // console.log("food added !!");
        },
        removeFood:(state,action:PayloadAction<number>)=>{
            console.log("food Removed !!");
        }
    }
})


export const {addFood,removeFood}=foodSlice.actions;
export default foodSlice.reducer;