import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div className="container">
      <h2
        style={{
          display: "flex",
          margin:"20px 0 20px 0",
          justifyContent: "Center",
          borderBottom: ".7px dotted gray",
        }}
      >
        Payment Method
      </h2>

      <Form>
        <div
          style={{
            border: ".7px solid blue",
            height: "250px",
            width: "1000px",
          }}
        >
          <div
            className="form-check"
            style={{
              margin: "15px 0 10px 30px ",
            }}
          >
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" style={{ fontWeight: "700" }}>
              Debit Card/Credit Card
              <p style={{ fontWeight: "200", fontFamily: "sans-serif" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                nam.
              </p>
            </label>
          </div>

          <Row style={{ margin: "15px" }}>
            <Col>
              <Form.Control placeholder="0000 0000 0000 0000" />
              <i class="fa fa-credit-card" aria-hidden="true"></i>
            </Col>
            <Col>
              <Form.Control
                placeholder="MM/YY"
                style={{ width: "100px", marginLeft: "50px" }}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="CVV"
                style={{ width: "100px", marginRight: "300px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control placeholder="Card Holder Name"  style={{ width: "70%", marginLeft: "30px" }}/>
            </Col>
          </Row>
        </div>
            <hr/>
            <Row>
            <Link to="/finalstep">
              <Button
                type="button"
                style={{ margin: "20px 0 0 20px", width: "300px" }}
              >
                Pay Now
              </Button>
            </Link>
            <Link to="/">
              <Button
                type="button"
                variant="danger"
                style={{ margin: "20px 0 0 70px", width: "300px" }}
              >
                cancel
              </Button>
            </Link>
          </Row>
      </Form>

    </div>
  );
}

export default Payment;
