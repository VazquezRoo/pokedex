import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/nameTrainer.slices";

export default configureStore({
    reducer:{
        nameTrainer


    }
})