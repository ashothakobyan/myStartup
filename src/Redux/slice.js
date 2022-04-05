import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState ={
  allChaked:false,
  allChakedArr:[],
  
}


export const myStartup = createSlice({
  name: 'myStartup',
  initialState,
  reducers: {
    allChakedArr: (state, action) => {
      state.allChakedArr = action.payload
    },
    changeCheaked:(state,action) =>{
      if(state.allChakedArr[action.payload.index].childesState[action.payload.i] == false){
        state.allChakedArr[action.payload.index].childesState[action.payload.i] = true
      }else if(state.allChakedArr[action.payload.index + 1]){
        state.allChakedArr[action.payload.index+1].childesState[0] = true
      }
    },
    disableChaked:(state,action)=>{
      for(let j = action.payload.index;j<state.allChakedArr.length;j++){
        if(j == action.payload.index){
          for(let h=action.payload.i;h<state.allChakedArr[j].childesState.length;h++){
            state.allChakedArr[j].childesState[h] = false
          }
        }else{
          for(let h=0;h<state.allChakedArr[j]. childesState.length;h++){
            state.allChakedArr[j].childesState[h] = false
          }
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const {changeCheaked,disableChaked,  allChakedArr } = myStartup.actions

export default myStartup.reducer