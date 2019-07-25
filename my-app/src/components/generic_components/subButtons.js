
import React from 'react'


const SubButton = ({productElement,fun}) => {
  console.log(productElement.length)
  if(productElement.length === 18 ) {
    return (
      <></>
    )
    };
  return (
    <div className="tile is-child buttons is-12 is-centered columns is-mobile">
        {productElement.map(function(individualProduct){
          return (
            <a href="/#" className="button is-outlined column" onclick={()=>{console.log('chikiout')}}>{individualProduct.title}</a>
         
          )
        })
        }
    </div>
    )
  }
  

  export default SubButton;