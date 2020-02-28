import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "react-bootstrap"
import "./index.css"
import axios from 'axios';


class StarWars extends Component {
   constructor() {
       super();
       this.state = {
           nameOne: "",
           tableRow: []
       }
   }


 componentDidMount() {
    axios.get("https://swapi.co/api/people/1/")
    .then(response => {
        this.setState({ tableRow: response.data })
        Object.keys(this.state.tableRow)
        console.log(this.state.tableRow);
        this.state.tableRow.map()
    })
    .catch(error => {
        console.log(error);
    })

    
  }

  renderTable()  {
      return (
         <Table>
        <tr>
        <td>{this.state.nameOne}</td>
        <td></td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
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