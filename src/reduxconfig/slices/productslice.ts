"use client"
import { SettingsEthernet } from "@mui/icons-material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface product {
    id: number;
    name: string;
    price: number;
    image: string;
}
export interface productsType {
  value: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[];
}

// Define the initial state using that type
const initialState: productsType | null = {
  value: [
    {
      id: 1,
      name: "galexy A14",
      price: 5230000,
      image: "https://dl.next1code.ir/images/mobile/A14.webp",
    },

    {
      id: 2,
      name: "galexy S23 FE",
      price: 23900000,
      image: "https://dl.next1code.ir/images/mobile/S23FE.webp",
    },
  ],
} as productsType;

export const products = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addphone: (state, action) => {
      state.value = [...state.value, action.payload];
      console.log("hi")
    },
    deletephone: (state, action) => {
      state.value = state.value.filter((item: product) => {
        return item.id !== action.payload
      })
      console.log("hi");
      
    }
  },
});

export const {addphone, deletephone} = products.actions;

// Other code such as selectors can use the imported `RootState` type
export const productslist = (state: any) => state.products.value;

export default products.reducer;

//counterReducer
