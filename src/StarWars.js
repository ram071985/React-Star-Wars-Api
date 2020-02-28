import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap"
import "./index.css"
import axios from 'axios';


class StarWars extends Component {
   constructor() {
       super();
       this.state = {
           name: "",
           birthDate:  "",
           height: "",
           mass: "",
           homeWorld: "",
           species: "",
           tableRows: []
       }
   }


 componentDidMount() {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
        this.setState({ tableRows: response.data })
        Object.keys(this.state.tableRows)
        console.log(this.state.tableRows);
    
    })
    .catch(error => {
        console.log(error);
    })

    
  }


  renderTable()  {
      return (
         <Table>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </Table>
      )
  }


  

  render() {
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

  </tbody>
</Table>
        </Container>
    )
  }



}


export default StarWars;

//  generate a new table from swapi.co data

//  clear ou the current table

//  create a new header

//create a new data row