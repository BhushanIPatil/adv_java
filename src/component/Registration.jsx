import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Registration.css";

export function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [validationMsg, setValidationMsg] = useState("");

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.contact ||
      !formData.gender ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setValidationMsg("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setValidationMsg("Passwords do not match");
      return;
    }

    setValidationMsg("");
    console.log("Form submitted:", formData);
    register();
  };

  const register = () => {
    console.log(formData);
    let url = `http://localhost:8080/register`;
    axios.post(url, formData).then((response) => {
      if (response.data.status) alert("Registration Successfull!");
      else alert("Not done!");
    });
  };

  return (
    <div id="regi">
      <Container id="reg">
        <Row>
          <Col lg="12" className="mt-4">
            <h2>Please fill the Registration Form !</h2>
          </Col>
        </Row>
        <div className="regi-container">
          <Form onSubmit={handleSubmit}>
          <Row>
             <Col lg="4">
               <Form.Group className="mt-4">
                 <Form.Label>First Name</Form.Label>
                 <Form.Control
                  type="text"
                  placeholder="Enter First name"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="4">
              <Form.Group className="mt-4">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Middle name"
                  value={formData.middleName}
                  onChange={(e) => handleChange("middleName", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="4">
              <Form.Group className="mt-4">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last name"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="2"></Col>
            <Col lg="4">
              <Form.Group className="mt-4">
                <Form.Label className="contact-label">Contact</Form.Label>
                <PhoneInput className="phone-input"
                  placeholder="Enter phone number"
                  value={formData.contact}
                  onChange={(value) => handleChange("contact", value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Gender</Form.Label>
                <br />
                <Form.Check
                  inline
                  label="Male"
                  name="group1"
                  type="radio"
                  id="r1"
                  checked={formData.gender === "male"}
                  onChange={() => handleChange("gender", "male")}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type="radio"
                  id="r2"
                  checked={formData.gender === "female"}
                  onChange={() => handleChange("gender", "female")}
                />
                <Form.Check
                  inline
                  label="Other"
                  name="group1"
                  type="radio"
                  id="r3"
                  checked={formData.gender === "other"}
                  onChange={() => handleChange("gender", "other")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="12" className="mt-4">
              <Button type="submit" id="rsubmit">
                Register
              </Button>
              <br /><br />
            </Col>
          </Row>
          </Form>
          {validationMsg && <p>{validationMsg}</p>}
        </div>
      </Container>
    </div>
  );
}