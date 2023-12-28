import React from 'react';
import { Container } from 'react-bootstrap';
import { Carousel } from "react-bootstrap";

import './footer.css';
import cricket1 from './images/cricket1.jpg';
import football2 from './images/football2.jpg';
import basketball3 from './images/basketball3.jpg';


export function Home() {
  return (
    <div className="home-page">
    <Container expand="lg" className="home-container"> {/* Apply the new class here */}
       <header id="homehead">
         
       </header>
       <>
        <div class="image-container">
         <Carousel data-bs-theme="dark">
         <Carousel.Item>
          <img src={cricket1} className="Img d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <h3 className="Ctitle shadows">Winning isn't everything, but wanting to win is.</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          
          <img src={football2} className="Img d-block w-100" alt="Second slide" />

          <Carousel.Caption>
            <h3 className="Ctitle shadows"> To be the man, you have to beat the man.</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={basketball3} className="Img d-block w-100" alt="Third slide" />
          <Carousel.Caption>
            <h3 className="Ctitle shadows">A champion is someone who gets up when he can't.</h3>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      </div>
      </>
       {/* <Input></Input> */}
       {/* <Card1></Card1> */}
    </Container>
    </div>
  );
}


