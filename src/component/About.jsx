import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
// import { Carousel } from "react-bootstrap";

import './footer.css';
import aboutbanner from './images/aboutbanner.jpg';
import Harsh from './images/Harsh.jpg';
import Kiran from './images/Kiran.jpg';
import Numair from './images/Numair.png';
import Hemant from './images/Hemant.jpeg';
import Bhushan from './images/Bhushan.png';


export function About() {
    return (
        <div className="about-page">
            <Container expand="lg" className="home-container"> {/* Apply the new class here */}

            
                <div class="image-container-about">
                    <img src={aboutbanner} className="Img d-block w-100" alt="First slide" />
                </div>

                <h2 className="heading-container-about text-center mt-5 mb-3">ABOUT US</h2>
                <div className="heading-container-about text-center">                    
                    <p className="para-content">Olympic Dream India Sports Academy was founded in 2015 by Yashpal Chhabra. The Academy is a multi-sport academy that promotes athleticism, balance, speed, and agility. The mission is to promote sport at all levels within ODI, from the grassroots to the professional level, while developing and maintaining relationships with schools and the local community. With less chance of emotional burnout, children focus on a variety of games that enable them to improve their skill development.Olympic Dream India Sports Academy works with able-bodied individuals as well as those with challenging mobility, we have specially qualified staff who have vast experience to deal with most situations to ensure that everyone benefits.</p>
                </div>


                <div className="Adiv">
                <h2 id="A2title" className="heading-container-about text-center mt-3 mb-3">CORE TEAM</h2>
                    <Container>
                        
                        <Row>
                            <Col lg="4">
                                <Card style={{ width: '18rem' }}>
                                    <img src={Harsh} className="Img d-block w-100" alt="First slide" />
                                    <Card.Body>
                                        <Card.Title> <h3 id="A3text">Co-Founder</h3><h5 id="A3text">Mr. Harsh Patil</h5> </Card.Title>
                                        <Card.Text id="A3text">
                                            Currently pursuing PG Diploma in Advanced Computing from CDAC Mumbai.  <br /> Roll No - 230940520023
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card style={{ width: '18rem' }}>
                                    <img src={Kiran} className="Img d-block w-100" alt="First slide" />
                                    <Card.Body>
                                        <Card.Title><h3 id="A3text">Co-Founder</h3><h5 id="A3text">Mr.Kiran Jadhav</h5></Card.Title>
                                        <Card.Text id="A3text">
                                            Currently pursuing PG Diploma in Advanced Computing from CDAC Mumbai. <br /> Roll No. - 230940520032
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg="4">
                                <Card style={{ width: '18rem' }}>
                                    <img src={Numair} className="Img d-block w-100" alt="First slide" />
                                    <Card.Body>
                                        <Card.Title><h3 id="A3text">Co-Founder</h3><h5 id="A3text">Mr.Numair Shaikh</h5></Card.Title>
                                        <Card.Text id="A3text">
                                            Currently pursuing PG Diploma in Advanced Computing from CDAC Mumbai. <br /> Roll No - 230940520051
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            
                                <Col lg="4" className="mt-5">
                                    <Card style={{ width: '18rem' }}>
                                        <img src={Hemant} className="Img d-block w-100" alt="First slide" />
                                        <Card.Body>
                                            <Card.Title><h3 id="A3text">Co-Founder</h3><h5 id="A3text">Mr.Hemant Dhumal</h5></Card.Title>
                                            <Card.Text id="A3text">
                                                Currently pursuing PG Diploma in Advanced Computing from CDAC Mumbai. <br /> Roll No. - 230940520023
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col lg="4" className="mt-5">
                                    <Card style={{ width: '18rem' }}>
                                        <img src={Bhushan} className="Img d-block w-100" alt="First slide" />
                                        <Card.Body>
                                            <Card.Title><h3 id="A3text">Co-Founder</h3><h5 id="A3text">Mr.Bhushan Patil(PL)</h5></Card.Title>
                                            <Card.Text id="A3text">
                                                Currently pursuing PG Diploma in Advanced Computing from CDAC Mumbai. <br /> Roll No. - 230940320034
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            

                        </Row>
                    </Container>
                    <br />
                    <br />
                    <br />
                </div>


            </Container>
        </div>
    );
}
