import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Login.css';

export const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Invalid email.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Invalid password. Password should be at least 6 characters long.');
      return;
    }

    // Proceed with login logic
    console.log('Logging in with', email, 'and', password);
 };

 const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
 };

 const validatePassword = (password) => {
    return password.length >= 6;
 };

 return (
    <div className="login-container" id="logdiv">
        <Row>
          <Col lg="3"></Col>
          <Col lg="6" id="logcol">
      <h1 className="login-title"  class="logtitle">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-label"  class="logg">
          Email:
          <input className="login-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label className="login-label" class="logg">
          Password:
          <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className="login-button" type="submit" >Login</button >
      </form>
      {error && <p className="login-error">{error}</p>}
      </Col>
      <Col lg="3"></Col>
      </Row>
      
    </div>
 );
};