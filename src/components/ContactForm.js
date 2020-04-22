import React, { Component } from "react";
import { Col, Button } from "reactstrap";
import ScreenContainer from "../components/ScreenContainer";
import Form from "react-bootstrap/Form";

class ContactForm extends Component {
  render() {
    return (
      <ScreenContainer>
        <div style={{ paddingBottom: 48 }}>
          <h2>It would be great to hear from you.</h2>
        </div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Control placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Control placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Control placeholder="E-mail" />
          </Form.Group>

          <Form.Group controlId="formGridSubject">
            <Form.Control placeholder="Subject" />
          </Form.Group>
          <Form.Group controlId="formGridText">
            <Form.Control as="textarea" placeholder="Your message" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </ScreenContainer>
    );
  }
}

export default ContactForm;
