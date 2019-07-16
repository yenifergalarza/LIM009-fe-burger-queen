import React from "react";
import logo from "../assets/burgerqueen.png";

const NavBar = ({ total }) => {
  return (
    <nav className="navbar is-warning">
      <div className="container">
        <div className="navbar-brand">
          <a href="/#" className="navbar-item App-Header">
            <img src={logo} alt="burgerqueen logo" className="App-logo" />
            <h1 className="title has-text-white">burgerQueen</h1>
          </a>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a href="/#" className="button is-primary">
                    <span className="icon">
                      <i className="fas fa-pencil-alt"></i>
                    </span>
                    <span>orden</span>
                  </a>
                </p>
                <p className="control">
                  <a href="/#" className="button is-primary">
                    <span className="icon">
                      <i className="fas fa-clock"></i>
                    </span>
                    <span>${total}</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
