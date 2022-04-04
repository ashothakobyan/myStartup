import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState ={
  allChaked:false,
  allChakedArr:[]
}


export const myStartup = createSlice({
  name: 'myStartup',
  initialState,
  reducers: {
    allChakedArr: (state, action) => {
      state.allChakedArr = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {  allChakedArr } = myStartup.actions

export default myStartup.reducer