import React ,{useState}from "react";
import Meals from "./Meals.jsx";
import Breakfast from "./Breakfast.jsx";


const ContainerMenu = () => {
const [state,setState]=useState('breakfast')
      return ( 
          

        <div className="box tile is-parent is-6 has-addons displayBlock ">
        <div>
          <div className="tabs is-fullwidth is-centered is-boxed">
            <ul>
              <li>
                <a href="/#" onClick={()=>{setState('breakfast')}}>Desayuno</a>
              </li>
              <li>
                <a href="/#" onClick={()=>{setState('AllMeals')}}>Todo el día</a>
              </li>
            </ul>
          </div>
        </div>

   <div className="displayFlex">
      {state === 'breakfast' && (
    <div>
    <Breakfast></Breakfast>
    </div>  )}

    {state === 'AllMeals' &&(
        <div>
<Meals></Meals>
        </div>
    )}
     </div> 

    
</div>
 )};

export default ContainerMenu;