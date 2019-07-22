import React,{useState} from "react";
import Button from '../components/generic_components/button'

import dataProducts from '../data';
import SubButton from '../components/generic_components/subButtons';


const Meals = () => {
    const [stateProducts] = useState(dataProducts)
    const state = stateProducts
    const [product, setProduct] = useState(state)
   
    const filterBurguer = (products) => {
      setProduct(state);
      let newArray = [];
      products.filter((element)=> {
        if(element.type === "burguer") {
          newArray.push(element)
        }
      })
      console.log(newArray)
      return  setProduct(newArray);
    };
  
  
    const filterAdditionals = (products) => {
      setProduct(state);
      let newArray = [];
      products.filter((element)=> {
        if(element.type === "additional") {
          newArray.push(element)
        }
      })
      console.log(newArray)
     return setProduct(newArray);
    }
  
    const filterDrinks = (products) => {
      setProduct(state)
      let newArray = []
      products.filter((element) => {
        if(element.type === "drinks") {
          newArray.push(element)
        }
      })
      console.log(newArray)
      return setProduct(newArray)
    }
    
    return (
      < >
  
  <Button onclick={()=>{filterBurguer(state)}} 
      text={"HAMBURGUESAS"}/>
  
  
  <Button onclick={()=>{filterAdditionals(state)}} text={"ACOMPAÑAMIENTOS"}/>
  
  
  <Button   onclick={()=>{filterDrinks(state)}}
  text={"BEBIDAS"}/>
  
      <SubButton   productElement={product}/>
  
      </>
    );
  }
export default Meals;