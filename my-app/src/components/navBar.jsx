import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/burgerqueen.png";

const NavBar = () => {
  return (
    <nav className="navbar is-warning">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item App-Header">
            <img src={logo} alt="burgerqueen logo" className="App-logo" />
            <h1 className="title has-text-white">burgerQueen</h1>
          </Link>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <div className="control">
                  <a href="/#" className="button is-primary">
                    <span className="icon">
                      <i className="fas fa-pencil-alt"></i>
                    </span>
                    <span>orden</span>
                  </a>
                </div>

                <div className="control">
                  <Link to="/cocina" className="button is-primary">
                    <i className="fas fa-hamburger"></i>
                    Cocina
                  </Link>
                </div>
                <div className="control">
                  <Link to="historial" className="button is-primary">
                    {" "}
                    <i className="fas fa-clock"></i>
                    Historial
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
