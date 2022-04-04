import React, { FC, useContext, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import '../CSS/checkComponent.css' 
import { store } from "../Redux/store";

const  CheckComponent:FC<any> =({
  title,
  index,
  chackedSatate
})=> {
  const[activ,setActiv] = useState(false)
  console.log(chackedSatate)

  return (
    <div className="checkComponent">
        <input disabled={!chackedSatate} className="checkbox" type="checkbox"></input>
        <h2>{title}</h2>
    </div>
  );
}

export default CheckComponent;