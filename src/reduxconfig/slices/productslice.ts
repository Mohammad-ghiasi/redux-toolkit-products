import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
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
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const {} = products.actions;

// Other code such as selectors can use the imported `RootState` type
export const productslist = (state: any) => state.products.value;

export default products.reducer;

//counterReducer
