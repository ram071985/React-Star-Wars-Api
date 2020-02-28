import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import Header from "./Header.js";
import StarWars from "./StarWars.js";



function App() {


  return (
  <Container>
    <Header />
    <StarWars />
  </Container>
  );
}

export default App;
