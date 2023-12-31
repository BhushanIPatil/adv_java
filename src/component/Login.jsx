import React, { useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [userFormData, setUserFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUserChange = (fieldName, value) => {
    setUserFormData({
      ...userFormData,
      [fieldName]: value,
    });
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    if (!userFormData.email || !userFormData.password) {
      setError('Please enter both email and password for user login.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/login', userFormData);
      handleLoginResponse(response);
    } catch (error) {
      handleLoginError(error);
    }
  };

  const handleLoginResponse = (response) => {
    console.log('Handle Login Response:', response);
    if (response.data.status) {
      
      localStorage.setItem('token', response.data.token);
      
      navigate('/');
    } else {
      setError('Invalid email or password');
      
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleLoginError = (error) => {
    console.error('Login error:', error);
    setError('An error occurred during login');
    
    alert('An error occurred during login. Please try again.');
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg="12" className="mt-4">
            <h2>Login</h2>
          </Col>
        </Row>
       
        <Form onSubmit={handleUserSubmit}>
          <Row>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  value={userFormData.email}
                  onChange={(e) => handleUserChange('email', e.target.value)}
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
                  value={userFormData.password}
                  onChange={(e) => handleUserChange('password', e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="mt-4">
              <Button type="submit">User Login</Button>
            </Col>
          </Row>
        </Form>

        {error && <p>{error}</p>}
      </Container>
    </div>
  );
};

export default Login;




