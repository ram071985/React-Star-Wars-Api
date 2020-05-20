import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import Header from "./Header.js";
import CharacterTable from "./CharacterTable.js";



function App() {


  return (
  <Container>
    <Header />
    <CharacterTable />
  </Container>
  );
}

export default App;
