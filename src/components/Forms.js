import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Forms() {
  return (
    <Form className="container-forms">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicWebsite">
        <Form.Label>Website</Form.Label>
        <Form.Control type="url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control className="form-message_box" type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Allow us to sell your personal details to whomever we want"
        />
      </Form.Group>
      <div className="forms-button">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default Forms;
