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

function App() {
  return (
    <div>
      <Header />
      <Container />
    </div>
  );
}

export default App;
