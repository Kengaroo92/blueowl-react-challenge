import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Card, Button } from "react-bootstrap";

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
      <Card.Body>{getRandomNumber(0, 101)}</Card.Body>
    </Card>
  );
};

export default MainCard;
