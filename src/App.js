import React from 'react';
import { Link } from "react-router-dom";
import Container from "./Container"

function Header() {
  return (
    <Link to="/">
      <div className="header">
        <img className="logo" alt="logo" src={process.env.REACT_APP_LOGO} />
        <h1 className="title">
          <strong>{process.env.REACT_APP_TITLE}</strong>
        </h1>
        <p className="description">
          {process.env.REACT_APP_SUBTITLE}
        </p>
      </div>
    </Link>
  );
}

function Footer() {
  return (
    <div className='footer'>
      <p>powered by <b><a href="https://github.com/dombott/statuspage">statuspage</a></b></p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
