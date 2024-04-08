// This is a Redux slice file for managing a list of products in a store.
// The products are stored as an array of objects with the following properties:
// - id: number
// - name: string
// - price: number
// - image: string

// Import necessary dependencies
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


// Define a type for the product object and the products array
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

// Define the initial state of the slice using the productsType interface
const initialState: productsType | null = {
  value: [],
} as productsType;

// Create the slice using createSlice function
export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Define a reducer function to add a new product to the list
    addphone: (state, action: PayloadAction<product>) => {
      // Check if the product already exists in the list
      const productExists = state.value.some((product: product) => product.id === action.payload.id);

      // If the product does not exist, add it to the list
      if (!productExists) {
        state.value = [...state.value, action.payload];
        toast.success('Product added successfully');
      }
      // Otherwise, log a message to the console
      else {
        console.log('Product already exists:', action.payload.id);
        toast.warning('Product already exists');
      }
    },

    // Define a reducer function to delete a product from the list
    deletephone: (state, action: PayloadAction<number>) => {
      // Filter out the product with the matching id from the list
      state.value = state.value.filter((product: product) => {
        return product.id!== action.payload;
      });
      toast.success('Product deleted successfully');
    }
  }
});

// Export the action creators for adding and deleting products
export const { addphone, deletephone } = products.actions;

// Export a selector function to get the list of products from the state
export const productslist = (state: any) => state.products.value;

// Export the default reducer for the products slice
export default products.reducer;