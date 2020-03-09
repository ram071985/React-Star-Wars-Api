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
      // startPage: 1,
      currentPage: ""
    };
  }

  async componentDidMount() {
    const charactersResponse = await axios.get(
      `https://swapi.co/api/people/?page=${this.state.currentPage}`
    );
    const characters = [];
    for (const character of charactersResponse.data.results) {
      const speciesResponse = await axios.get(character.species);
      character.species = speciesResponse.data;
      const homeWorldResponse = await axios.get(character.homeworld);
      character.homeworld = homeWorldResponse.data;
      characters.push(character);
    }

    this.setState({ people: characters });
  }

  async updatePage(e) {
    const charactersResponse = await axios.get(
      `https://swapi.co/api/people/?page=${e.target.textContent}`
    );
    const characters = [];
    for (const character of charactersResponse.data.results) {
      const speciesResponse = await axios.get(character.species);
      character.species = speciesResponse.data;
      const homeWorldResponse = await axios.get(character.homeworld);
      character.homeworld = homeWorldResponse.data;
      characters.push(character);
    }
    this.setState({ people: characters });
  }

  loadPagination = index => {
    return (
      <Pagination key={index}>
        <Pagination.Item onClick={this.updatePage}>1</Pagination.Item>
        <Pagination.Item onClick={this.updatePage}>2</Pagination.Item>
        <Pagination.Item onClick={this.updatePage}>3</Pagination.Item>
        <Pagination.Item onClick={this.updatePage}>4</Pagination.Item>
        <Pagination.Item onClick={this.updatePage}>5</Pagination.Item>
        <Pagination.Item onClick={this.updatePage}>6</Pagination.Item>
        <Pagination.Item onClick={this.updatePage}>7</Pagination.Item>
        <Pagination.Item onClick={this.updatePage}>8</Pagination.Item>
        <Pagination.Item onClick={this.updatePage}>9</Pagination.Item>
      </Pagination>
    );
  };
  render() {
    const rows = this.state.people.map(person => (
      <tr>
        <td>{person.name}</td>
        <td>{person.birth_year}</td>
        <td>{person.height}</td>
        <td>{person.mass}</td>
        <td>{person.homeworld.name}</td>
        <td>{person.species.name}</td>
      </tr>
    ));

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
          <tbody>{rows}</tbody>
        </Table>
        {this.loadPagination()}
      </Container>
    );
  }
}
export default StarWars;
