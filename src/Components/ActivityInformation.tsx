import React, { FC, ReactComponentElement, useEffect, useState } from "react";

import '../CSS/activityInformation.css' 
import CheckComponent from "./CheckComponent";
import {IData} from "./FackData"
import { v4 as uuidv4 } from 'uuid';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import '../CSS/checkComponent.css' 
import { changeCheaked, disableChaked } from "../Redux/slice";
import icon from "../Components/60731.png"
const ActivityInformation:FC<IData> = ({
   name,
   childes,
   index
})=> {
  const dispatch = useDispatch()
  const  state  = useSelector((state:RootStateOrAny)=>state.myStartup)
  const[activ,setActiv] = useState("none")


  const changeNextChaked:any =(e:any,i:any) =>{
    if(index === state.allChakedArr.length && i === state.allChakedArr[index-1].childesState.length-1){
      fetch('https://uselessfacts.jsph.pl/random.json ')
      .then(response => response.json())
      .then(data => alert(data.text))
      setActiv("none")

      let domData:any =Array.from( e.target.parentElement.parentElement.parentElement.childNodes)
      domData = domData.slice(1)
      for(let h = 0;h<domData.length;h++){
        for(let j =   0;j<domData[h].childNodes.length;j++){
          console.log(domData,index,h)
          if(domData[h].childNodes[j].className == "checkComponent"){
            domData[h].childNodes[j].childNodes[0].checked = false
          }else{
            console.log(domData[h].childNodes[j].childNodes[2])
            domData[h].childNodes[j].childNodes[2].style.display = "none"
          }
        }
      }
      dispatch(
        disableChaked({
          index:0,
          i:1
        }))
    }else{
      if(e.target.checked){
        if(i == state.allChakedArr[index-1].childesState.length-1){
          console.log(44444444444)
          setActiv("activ")
        }
        dispatch(changeCheaked({
          index:index-1,
          i:i+1
        }))

      }else{
        let domData:any =Array.from( e.target.parentElement.parentElement.parentElement.childNodes)
        domData = domData.slice(index)
        for(let h = 0;h<domData.length;h++){
          for(let j = h==0?i+1:  0;j<domData[h].childNodes.length;j++){
            if(domData[h].childNodes[j].className == "checkComponent"){
              domData[h].childNodes[j].childNodes[0].checked = false
            }else{
              domData[h].childNodes[j].childNodes[2].style.display = "none"
            }
            
          }
        }

        // setActiv("none")
        dispatch(
          disableChaked({
            index:index-1,
            i:i+1
          }))
      }
    }


  }
  return (
    <div className="activityInformation">
        <div className="activityInformation--title">
            <div className="circul">{index}</div>
            <h2>{name}</h2>
            <img className={`checkedIcon ${activ}`} src={icon} ></img>
        </div>
        {childes.map((el,i)=>{
          return(
          <div  className="checkComponent">
            <input onClick={(e)=>changeNextChaked(e,i)} disabled={!state.allChakedArr[index-1]?.childesState[i]} className="checkbox" type="checkbox"></input>
            <h2>{el.title}</h2>
          </div>
          )
        } )}
        
    </div>
  );
}

export default ActivityInformation;


{/* <CheckComponent chackedSatate={state?.childesState[i]}   key={uuidv4()} {...el} />) */}