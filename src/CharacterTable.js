import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap";
import "./index.css";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import PaginationBar from "./PaginationBar.js";

class CharacterTable extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      people: [],
      currentPage: "",
      loading: false
    };
  }

  addHttps = url => {
    return url.toString().replace(/http:/g, "https:");
  };

  loadCharacters = async pageNumber => {
    this.setState({ loading: true });
    const charactersResponse = await axios.get(
      `https://swapi.dev/api/people/?page=${pageNumber}`
    );
    const characters = [];
    for (const character of charactersResponse.data.results) {
      const speciesResponse = await axios.get(this.addHttps(character.species));
      character.species = speciesResponse.data;
      const homeWorldResponse = await axios.get(
        this.addHttps(character.homeworld)
      );
      character.homeworld = homeWorldResponse.data;
      characters.push(character);
    }

    this.setState({
      count: charactersResponse.data.count,
      people: characters,
      loading: false
    });
  };

  async componentDidMount() {
    this.loadCharacters(this.state.currentPage);
  }

  updatePage = async e => {
    this.loadCharacters(e.target.textContent);
  };

  LoadingSpinner = () => {
    return (
      <tr>
        <td>
          <i className="fa fa-spinner fa-spin" /> Loading...
        </td>
      </tr>
    );
  };

  render() {
    const rows = this.state.people.map((person, index) => (
      <tr key={index}>
        <td>{person.name}</td>
        <td>{person.birth_year}</td>
        <td>{person.height}</td>
        <td>{person.mass}</td>
        <td>{person.homeworld.name}</td>
        <td>{person.species.name}</td>
      </tr>
    ));
    const { loading } = this.state;
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
          <tbody>{loading ? this.LoadingSpinner() : rows}</tbody>
        </Table>
        <PaginationBar count={this.state.count} updatePage={this.updatePage} />
      </Container>
    );
  }
}
export default CharacterTable;
