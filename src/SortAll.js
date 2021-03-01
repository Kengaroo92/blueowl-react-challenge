import "bootstrap/dist/css/bootstrap.css";
import {Button} from 'react-bootstrap'
import React from 'react';

const SortAll = () => {
    return (
      <Button
        type="submit"
        className="ui positive button mb-1 mt-1"
        onClick={function () {
          this.SortAll();
        }}
      >
        <i className="sort amount down icon"></i>
        Sort All
      </Button>
    );
  }

  export default SortAll;
