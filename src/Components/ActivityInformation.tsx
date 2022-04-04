import React, { FC, useState } from "react";

import '../CSS/activityInformation.css' 
import CheckComponent from "./CheckComponent";
import {IData} from "./FackData"
import { v4 as uuidv4 } from 'uuid';
import { RootStateOrAny, useSelector } from "react-redux";

const ActivityInformation:FC<IData> = ({
   name,
   childes,
   index
})=> {
  const  state  = useSelector((state:RootStateOrAny)=>state.myStartup.allChakedArr[index-1])
  // console.log(state.childesState)
  return (
    <div className="activityInformation">
        <div className="activityInformation--title">
            <div className="circul">{index}</div>
            <h2>{name}</h2>
        </div>
        {childes.map((el,i)=> <CheckComponent chackedSatate={state?.childesState[i]}   key={uuidv4()} {...el} />)}
        
    </div>
  );
}

export default ActivityInformation;