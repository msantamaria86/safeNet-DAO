import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  
]

export const proposalSlice = createSlice({
  name: 'proposals',
  initialState,
  reducers:{
    addProposal: (state,action) => {
      state.push(action.payload);
      },
  }
})

export const {addProposal} = proposalSlice.actions;
export default proposalSlice.reducer;

