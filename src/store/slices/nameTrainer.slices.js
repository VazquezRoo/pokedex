import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
    name:"nameTrainer",
    initialState:  JSON.parse(localStorage.getItem("name")) ?? '',
    reducers:{
        setNameTrainer: (state, action)=>{
        const newState = action.payload
        localStorage.setItem("name", JSON.stringify(action.payload))
        return  newState
        }
        ,
        
    }
})
    export const {setNameTrainer} = nameTrainerSlice.actions


export default nameTrainerSlice.reducer;





