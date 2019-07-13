import React from 'react';
const NavBar = ({total})=>(
    <nav className="navbar is-warning">
    <div className="container"> <div className="navbar-brand">
       <a className="navbar-item">
 <h1 className="title">burgerQueen</h1>
       </a>
       <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
         <span></span>
         <span></span>
         <span></span>
       </div>
     </div>
 
   
       <div className="navbar-end">
         <div className="navbar-item">
           <div className="field is-grouped">
             <p className="control">
               <a className="button is-primary" >
                 <span className="icon">
           
                   <i className="fas fa-pencil-alt"></i>
                 </span>
                 <span>
                   orden 
                 </span>
               </a>
             </p>
             <p className="control">
               <a className="button is-primary">
                 <span className="icon">
                   <i className="fas fa-clock"></i>
                 </span>
                 <span>${total}</span>
               </a>
             </p>
           </div>
         </div>
       </div></div>
   
   </nav>
  
);
export default NavBar;