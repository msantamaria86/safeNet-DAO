import { configureStore } from '@reduxjs/toolkit'
import addressesReducer from '../features/addresses/AddressSlice'

export const store = configureStore({
  reducer: {
    addresses: addressesReducer,
  }
})
