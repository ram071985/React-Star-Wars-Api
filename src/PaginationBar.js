import React, { Component } from "react";
import { Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class PaginationBar extends Component {
  render() {
    const pages = [];

    for (let i = 1; i < Math.round(this.props.count / 8); i++) {
      pages.push(
        <Pagination.Item key={i} onClick={this.props.updatePage}>
          {i}
        </Pagination.Item>
      );
    }

    return <Pagination>{pages}</Pagination>;
  }
}

export default PaginationBar;
