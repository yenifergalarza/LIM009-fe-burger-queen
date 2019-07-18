import React,{useState} from "react";
import MealsAdditional from './MealsAdditional.jsx';
import MealsDrinks from './MealsDrinks.jsx';
import MealsHamburger from './MealsHamburger.jsx'

const Meals = () => {

const [TypeMeal,setTypeMeal] = useState('Hamburger');

return(   <div className="displayFlex">
<div className="tile is-child button is-warning is-12" onClick={()=>{setTypeMeal('Hamburger')}}>
 Hamburguesas
</div>

{TypeMeal === 'Hamburger' && (
    <div className="tile is-child buttons is-12 is-centered columns is-mobile">
<MealsHamburger></MealsHamburger>
    </div>
    )}

<div className="tile is-child button is-warning is-12" onClick={()=>{setTypeMeal('Additional')}} >
Acompañamientos
</div>
{TypeMeal === 'Additional' && (
    <div className="tile is-child buttons is-12 is-centered columns is-mobile">
  <MealsAdditional></MealsAdditional>
    </div>  )}

<div className="tile is-child button is-warning is-12" onClick={()=>{setTypeMeal('Drinks')}} >
Bebidas
</div>

{TypeMeal === 'Drinks' && (
<div className="tile is-child buttons is-12 is-centered columns is-mobile">
    <MealsDrinks></MealsDrinks>
</div>
)}

</div>   
 )};

export default Meals;