import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: "Address 1"
  },
  {
    id: '2',
    title: "Address 2"
  }
]

export const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers:{
    
  }
})

export  default addressSlice.reducer;
