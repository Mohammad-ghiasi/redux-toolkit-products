"use client";
import { SettingsEthernet } from "@mui/icons-material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";

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
  value: [],
} as productsType;

export const products = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addphone: (state, action) => {
      // Check if the phone number already exists in the state
      const phoneNumberExists = state.value.some((phone: product) => phone.id === action.payload.id);
  
      // If the phone number doesn't exist, add it to the state
      if (!phoneNumberExists) {
          state.value = [...state.value, action.payload];
      } else {
          console.log('Phone number already exists:', action.payload.id);
      }
  },

    deletephone: (state, action) => {
      state.value = state.value.filter((item: product) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addphone, deletephone } = products.actions;

// Other code such as selectors can use the imported `RootState` type
export const productslist = (state: any) => state.products.value;

export default products.reducer;

//counterReducer
