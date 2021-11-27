import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const FinalStep = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Your Order has been placed</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          ratione iste molestias odio aperiam placeat id aliquam, in dolores
          atque.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <Button
            type="button"
            style={{ margin: "20px 0 0 50px", width: "300px" ,fontFamily:"sans-serif"}}
          >
            Continue shopping
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FinalStep;
