import React from 'react';
import logo from './assets/burgerqueen.png';
import './App.css';

export const Header = (props) => {

  return (
    <>     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-text">
          {props.text}
        </h1>
        </header>
    </>
  )
}

export const Section = (props) => {

  return (
    <>
      <section>
        <div>
         <p>
           you rock
         </p>
        </div>
      </section>
    </>
  )
}

