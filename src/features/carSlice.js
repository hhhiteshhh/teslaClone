import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "car",
  initialState: {
    cars: ["Model S","Model 3","Model X","Model Y"],
  },
  reducers: {},
});

export const {} = carSlice.actions;

export const selectCar = (state) => state.car.cars;

export default carSlice.reducer;
