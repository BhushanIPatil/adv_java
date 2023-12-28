import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import 'react-phone-number-input/style.css'
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export function Registration() {
 const [firstName, setFirstName] = useState("");
 const [middleName, setMiddleName] = useState("");
 const [lastName, setLastName] = useState("");
 const [email, setEmail] = useState("");
 const [contact, setContact] = useState("");
//  const [passportNumber, setPassportNumber] = useState("");
//  const [confirmPassportNumber, setConfirmPassportNumber] = useState("");
 const [gender, setGender] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [validationMsg, setValidationMsg] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setValidationMsg("Passwords do not match");
    //else if (passportNumber !== confirmPassportNumber) {
    //   setValidationMsg("Passport Numbers do not match");
    } else {
      setValidationMsg("");
      // Proceed with Registration Logic
    }
 };

 return (
    <div id="regi">
      <Container id="reg">
        <Row>
          <Col lg="12" className="mt-4">
            <h2>Please fill the Registration Form !</h2>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg="4">
              <Form.Group className="mt-4">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Enter First name"
                 value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="4">
              <Form.Group className="mt-4">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Enter Middle name"
                 value={middleName}
                 onChange={(e) => setMiddleName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="4">
              <Form.Group className="mt-4">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Enter Last name"
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
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
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="2"></Col>
            <Col lg="4">
              <Form.Group className="mt-4">
                <Form.Label>Contact</Form.Label>
                <PhoneInput
                 placeholder="Enter phone number"
                 value={contact}
                 onChange={setContact}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* <Row>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Passport Number</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Enter Passport Number"
                 value={passportNumber}
                 onChange={(e) => setPassportNumber(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Confirm Passport Number</Form.Label>
                <Form.Control
                 type="text"
                 placeholder="Re-enter Passport Number"
                 value={confirmPassportNumber}
                 onChange={(e) => setConfirmPassportNumber(e.target.value)}
                />
              </Form.Group>
            </Col> 
           </Row> */}

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
                 checked={gender === "male"}
                 onChange={() => setGender("male")}
                />
                <Form.Check
                 inline
                 label="Female"
                 name="group1"
                 type="radio"
                 id="r2"
                 checked={gender === "female"}
                 onChange={() => setGender("female")}
                />
                <Form.Check
                 inline
                 label="Other"
                 name="group1"
                 type="radio"
                 id="r1"
                 checked={gender === "other"}
                 onChange={() => setGender("other")}
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
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                 type="password"
                 placeholder="Re-enter password"
                 value={confirmPassword}
                 onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg="12" className="mt-4">
              <Button type="submit" id="rsubmit" >
                Register
              </Button>
              <br /><br />
            </Col>
          </Row>
        </Form>
        {validationMsg && <p>{validationMsg}</p>}
      </Container>
    </div>
 );
}