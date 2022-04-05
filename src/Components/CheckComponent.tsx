import React, { FC, useContext, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import '../CSS/checkComponent.css' 
import { changeCheaked } from "../Redux/slice";
import { store } from "../Redux/store";

const  CheckComponent:FC<any> =({
  title,
  index,
  chackedSatate
})=> {
  const dispatch = useDispatch()
  const changeNextChaked:any =(e:any) =>{
    
    dispatch(changeCheaked({}))
  }

  return (
    <div className="checkComponent">
        <input onClick={(e)=>changeNextChaked(e)} disabled={!chackedSatate} className="checkbox" type="checkbox"></input>
        <h2>{title}</h2>
    </div>
  );
}

export default CheckComponent;