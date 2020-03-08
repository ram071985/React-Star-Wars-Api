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

  


      componentDidMount() {
    axios.get(`https://swapi.co/api/people/?page=${this.state.currentPage}`).then(response => {
      response.data.results.forEach(person => {
        axios.get(person.homeworld).then(hwResponse => {
          
          this.setState({ homeWorld: hwResponse.data.name });
         console.log(this.state.homeWorld)
        });
      }); 
      this.setState({ people: response.data.results });
      
    })
      .catch(error => {
        console.log(error);
      });
  }

 
  renderHomePlanet = () => {
    const planets = [...this.state.homeWorld]
    this.setState({homeWorld: planets})
    console.log(this.state.homeWorld)
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
        <td>{this.state.homeWorld}</td>
        <td>{person.species}</td>
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
