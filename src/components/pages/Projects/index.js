
import React, { Component } from "react";
import { CardDeck, Button, Container, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import schedule from "./img/schedule2.jpg";
import joylogo from "./img/joylogo2.PNG";
import localroots from "./img/localroots2.JPEG";

import refactor from "./img/refactor2.JPG";
import "./style.css";


export class BootstrapCarousel extends Component {
  render() {
    return (
      <div className="allproject">
        <Container >
          <Carousel fade>
            <Carousel.Item interval={1000}>
              <Card className="text-center d-block mx-auto" border="secondary" style={{ width: "30rem" }}>
              <div className="cardheader">
                <Card.Header>React Portfolio</Card.Header>
                </div>
                <Card.Img variant="top" src={joylogo} />
                
                <Card.Body>
                  <div className="cardbody">
                  <Card.Title>React Portfolio</Card.Title>
                  <Card.Text>
                    This very portfolio you're viewing was developed by myself,
                    from scratch. Feel free to browse my GitHub repo!
                  </Card.Text>
                  </div>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Carousel.Item>
    
            <Carousel.Item interval={1000}>
              <Card className="text-center d-block mx-auto" border="secondary" style={{ width: "30rem" }}>
                <div className="cardheader">
                <Card.Header>Local Roots App</Card.Header>
                </div>
                <Card.Img variant="top" src={localroots} />
                <Card.Body>
                <div className="cardbody">
                  <Card.Title>Local Roots Project</Card.Title>
                  <Card.Text>
                  Local Roots is an app I designed with react. The purpose of
                    this app is to provide a marketplace for plant lovers.
                  </Card.Text>
                  </div>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <Card className="text-center d-block mx-auto" border="secondary" style={{ width: "30rem" }}>
                <div className="cardheader">
                <Card.Header>Scheduler</Card.Header>
                </div>
                <Card.Img variant="top" src={schedule} />
                <Card.Body>
                <div className="cardbody">
                  <Card.Title>Scheduler</Card.Title>
                  <Card.Text>
                  Here, you'll find a fully functioning Scheduler that makes
                    use of local storage!
                  </Card.Text>
                  </div>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <Card className="text-center d-block mx-auto" border="secondary" style={{ width: "40rem" }}>
                <div className="cardheader">
                <Card.Header>Code Refactor</Card.Header>
                </div>
                <Card.Img variant="top" src={refactor} />
                <Card.Body>
                <div className="cardbody">
                  <Card.Title>Code Refactor</Card.Title>
                  <Card.Text>
                  Feel free to browse my GitHub repo to see how I refactored
                    the code for this site.
                  </Card.Text>
                  </div>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Carousel.Item>

  

        
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default BootstrapCarousel;


