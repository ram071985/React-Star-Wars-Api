import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

class PaginationBar extends Component {

    
  render() {
      const pages = [];

      for (let i = 0; i < Math.round(this.count / 10); i++) {
          pages.push(<Pagination.Item onClick={this.props.updatePage}>{i}</Pagination.Item>);
      }

    return(
        <Pagination>
            {pages}
      </Pagination>
    );
  }
}

export default PaginationBar;
