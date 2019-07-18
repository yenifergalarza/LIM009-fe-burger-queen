
import React ,{useState}from "react";
import BreakfastDrinks from "./BreakfastDrinks.jsx";
import BreakfastSandwich from "./BreakfastSandwich.jsx";

const Breakfast = () => {
  const [state,setState]= useState('drinks');
  return (
 <div className="displayFlex">
 <div className="tile is-child button is-warning is-12" onClick={()=>{setState('drinks')}}>
   Bebidas
 </div>
 <div>{state === 'drinks' && (
    <div>
   <BreakfastDrinks></BreakfastDrinks>
    </div>  )}</div>
 

 <div className="tile is-child button is-warning is-12" onClick={()=>{setState('sandwich')}}>
   Sandwiches
 </div>
 <div>{state === 'sandwich' && (
    <div>
   <BreakfastSandwich></BreakfastSandwich>
    </div>  )}</div>
 
</div>
)};
export default Breakfast;
