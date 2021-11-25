import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars:[]
}

const carSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
      addToRide: (state, action) => {
          cars:[...state.cars, action.payload]
      }
    }
});

export const {
 addToRide
} = carSlice.actions

//Selectors
export const selectCars = state => state.items.cars
export default carSlice.reducer