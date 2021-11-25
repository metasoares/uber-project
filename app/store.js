import { configureStore } from "@reduxjs/toolkit";
import  itemsReducer from '../slices/carSlice'


export const store = configureStore({
   reducer: {
    items: itemsReducer
   }
    
})