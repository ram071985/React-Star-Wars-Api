import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Pagination } from "react-bootstrap";
import "./index.css";
import axios from "axios";

class StarWars extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      total: [],
      homeWorld: [],
      currentPage: 1
    };
  }

  


      async componentDidMount() {
    const charactersResponse = await 
    axios.get(`https://swapi.co/api/people/?page=${this.state.currentPage}`);
   const characters = []; 
      for (const character of charactersResponse.data.results) {
        const speciesResponse = await
        axios.get(character.species);
        character.species = speciesResponse.data;
        const homeWorldResponse = await
        axios.get(character.homeworld);
         character.homeworld = homeWorldResponse.data;
         characters.push(character);

      }
    
      this.setState({ people: characters });
 
      
    }
    



  /*loadPagination = (index) => {
    return (
      <Pagination key={index}>
     <Pagination.Item onClick={}>1</Pagination.Item>
     <Pagination.Item onClick={}>2</Pagination.Item>

     </Pagination>
    )
    }*/
  render() {
  const rows = this.state.people.map(person => 
      <tr>
        <td>{person.name}</td>
        <td>{person.birth_year}</td>
        <td>{person.height}</td>
        <td>{person.mass}</td>
        <td>{person.homeworld.name}</td>
        <td>{person.species.name}</td>
      </tr>
    )

 
    return (
      <Container>
        <Table responsive className="mt-4 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Home World</th>
              <th>Species</th>
            </tr>
          </thead>
          <tbody>
          {rows}
          </tbody>
        </Table>
        <Pagination>
        </Pagination>
      </Container>
    );
  }
}
export default StarWars;
