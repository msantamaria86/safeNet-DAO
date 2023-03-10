import { configureStore } from '@reduxjs/toolkit'
import addressesReducer from '../features/addresses/AddressSlice'
import proposalsReducer from '..//features/proposals/ProposalSlice'

export const store = configureStore({
    reducer: {
    addresses: addressesReducer,
    proposals: proposalsReducer,
  }
})
