import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    description: "description 1"
  },
  {
    id: '2',
    description: "description 2"
  }
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

