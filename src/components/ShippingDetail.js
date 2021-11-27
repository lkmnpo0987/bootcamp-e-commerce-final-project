import React from "react";
import { Link } from "react-router-dom";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import "./ShippingDetail.css";

export default function ShippingDetail() {
  return (
    <React.Fragment>
      <h2 style={{ display: "flex", justifyContent: "Center" }}>
        Shipping Details
      </h2>
      <div className="shipping-form">
        <Form style={{ width: "50%" }}>
          <Row style={{ marginLeft: "100px" }}>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Row>
            <FloatingLabel
              style={{ margin: "30px 0 0 130px", width: "100%" }}
              controlId="floatingTextarea"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Address Line1" />
            </FloatingLabel>
          </Row>
          <Row>
            <FloatingLabel
              style={{ marginLeft: " 130px", width: "100%" }}
              controlId="floatingTextarea"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Address Line2" />
            </FloatingLabel>
          </Row>
          <Row>
            <FloatingLabel controlId="floatingSelect">
              <Form.Select
                aria-label="Floating label"
                style={{ marginLeft: "130px", width: "400px", height: "37px" }}
              >
                <option>Country</option>
                <option value="1">India</option>
                <option value="2">Austrelia</option>
                <option value="3">America</option>
                <option value="1">India</option>
                <option value="2">Austrelia</option>
                <option value="3">America</option>
                <option value="1">India</option>
                <option value="2">Austrelia</option>
                <option value="3">America</option>
              </Form.Select>
            </FloatingLabel>
            <Col>
              <Form.Control placeholder="City" />
            </Col>
          </Row>
          <Row style={{ margin: "30px 0 0 100px" }}>
            <Col>
              <Form.Control placeholder="Zip/Postal Code" />
            </Col>
            <Col>
              <Form.Control placeholder="Phone Number" />
            </Col>
          </Row>
          <Row>
            <div
              className="form-check"
              style={{ border: ".6px solid blue", margin: "30px 0 0 130px",height:"100px" ,width:"200px"}}
            >
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" style = {{fontWeight:"700"}}>
                Free Shipping
                <p style = {{fontWeight:"200",fontFamily:"sans-serif"}}>between 2-5 working days</p>
              </label>
            </div>
            <div
              className="form-check"
              style={{ border: ".6px solid blue", margin: "30px 0 0 130px",height:"100px" ,width:"200px"}}
            >
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="" style = {{fontWeight:"700"}}>
                Next Day Delivery
              <p style = {{fontWeight:"200",fontFamily:"sans-serif"}}>24 Hours from Checkout</p>
              </label>
            </div>
          </Row>
          <Row>
            <Link to="/payment">
              <Button
                type="button"
                style={{ margin: "20px 0 0 130px", width: "300px" }}
              >
                Next
              </Button>
            </Link>
            <Link to="/">
              <Button
                type="button"
                variant="danger"
                style={{ margin: "20px 0 0 100px", width: "300px" }}
              >
                cancel
              </Button>
            </Link>
          </Row>
        </Form>
      </div>
    </React.Fragment>
  );
}
