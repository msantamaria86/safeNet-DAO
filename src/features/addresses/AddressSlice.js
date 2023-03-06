import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: "Address 1",
    description: "description 1"
  },
  {
    id: '2',
    title: "Address 2",
    description: "description 2"
  }
]

export const addressSlice = createSlice({
  name: 'addresses',
  initialState, 
  reducers:{
    addAddress: (state,action) => {
    state.push(action.payload);
    },

    editAddress: (state,action) => {
      const {id, title, description} = action.payload
      const result = state.find(address => address.id === id) 
      if (result) {
        result.title = title
        result.description = description
      }     
    },

    deleteAddress: (state,action) => {
      const result = state.find(address => address.id === action.payload)      
      if (result) {
        state.splice(state.indexOf(result),1)
      }
    }
  } 
})

export const {addAddress, deleteAddress, editAddress} = addressSlice.actions;
export default addressSlice.reducer;
