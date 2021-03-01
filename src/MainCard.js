import "bootstrap/dist/css/bootstrap.css";
import { Card, Button } from "react-bootstrap";
import React from "react";

let getRandomNumber = function (min, max) {
  let getRandom = Math.floor(Math.random() * max + min);
  return getRandom;
};

const MainCard = () => {
  return (
    <Card>
      <Button
        className="ui mini red basic icon button"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
        }}
      >
        <i
          className="red x icon"
          style={{
            position: "relative",
            top: "0",
            right: "0",
          }}
        ></i>
      </Button>
      <Card.Body>
        <Card.Text>{getRandomNumber(0, 101)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MainCard;
