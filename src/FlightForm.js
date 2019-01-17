import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class FlightForm extends Component {
  render() {
    return (
      <Form>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="Departure">Departure</Label>
              <Input
                type="text"
                name="text"
                id="exampleDeparture"
                placeholder="Departing from"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="Arrival">Arrival</Label>
              <Input
                type="text"
                name="text"
                id="exampleArrival"
                placeholder="Arriving to"
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup tag="fieldset" row>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> Round Trip
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> One Way
                </Label>
              </FormGroup>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="departDate">Depart Date</Label>
              <Input
                type="date"
                name="date"
                id="departDate"
                placeholder="date placeholder"
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="returnDate">Return Date</Label>
              <Input
                type="date"
                name="date"
                id="returnDate"
                placeholder="date placeholder"
              />
            </FormGroup>
          </Col>

          <Col md={2}>
            <FormGroup>
              <Label for="passengers">passengers</Label>
              <Input type="select" name="select" id="examplePassengers">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Button color="primary">Search Flights</Button>{" "}
        </Row>
      </Form>
    );
  }
}

export default FlightForm;
