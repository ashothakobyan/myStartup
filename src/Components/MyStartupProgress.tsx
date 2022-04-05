import React, { useEffect, useState } from "react";

import '../CSS/myStartupProgress.css' 
import ActivityInformation from "./ActivityInformation";
import {data, IData} from  "./FackData"
import { v4 as uuidv4 } from 'uuid';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { allChakedArr } from "../Redux/slice";

function MyStartupProgress() {

  const [componentsChaked,SetcomponentsChaked] = useState<any>()
  const dispatch = useDispatch()

  let state:any =[]
  useEffect(()=>{
    data.map((el,i)=>{
      let arr = Array.from({length:el.childes.length}).map(el=>el = false)
      if(i === 0){
        arr[0] = true
      }
      
      state[i] = {
        name:el.name,
        childesState:arr
      }
    })
    dispatch(allChakedArr(state))
  },[])

  
  
  return (
    <div className="myStartupProgress">
        <h1 className="title">My startup progress</h1>
        {data.map((el,i)=><ActivityInformation key={uuidv4()}  {...el}/>)}
    </div>
  );
}

export default MyStartupProgress;