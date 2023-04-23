import React from 'react';
import { Link } from "react-router-dom";
import Container from "./Container"

function Header() {
  return (
    <div className="header">
      <h1 className="title">
        <Link to="/"><strong>Statuspage</strong></Link>
      </h1>
      <p className="description">
        View incidents and status updates.
      </p>
    </div>
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
