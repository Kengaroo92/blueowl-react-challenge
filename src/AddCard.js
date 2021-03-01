import "bootstrap/dist/css/bootstrap.css";
import {Button} from 'react-bootstrap'
import React from 'react';

const AddCard = () => {
    return (
      <Button
        type="submit"
        className="ui button mb-1 mt-1"
        onClick={function () {
          this.AddCard();
        }}
      >
        <i className="plus icon"></i>
        Add Card
      </Button>
    );
  }

  export default AddCard;
