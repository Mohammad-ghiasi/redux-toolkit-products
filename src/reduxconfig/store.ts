/**
 * This file sets up the Redux store using Redux Toolkit's `configureStore` function.
 * The store is configured with a single reducer, `products`, imported from './slices/productslice'.
 * 
 * The `RootState` and `AppDispatch` types are inferred from the store itself,
 * allowing for accurate typing throughout the application.
 */
import { configureStore } from '@reduxjs/toolkit'
import products from './slices/productslice'

export const store = configureStore({
  reducer: {
    counter: products
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch