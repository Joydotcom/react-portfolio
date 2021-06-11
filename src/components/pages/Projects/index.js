import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import schedule from "./img/schedule2.jpg";
import joylogo from "./img/joylogo2.PNG";
import localroots from "./img/localroots2.JPEG";
import gamerz from "./img/gamerzsite.png";



import refactor from "./img/refactor2.JPG";
import "./style.css";

export class BootstrapCarousel extends Component {
  render() {
    return (
      <div className="allproject">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="name">Projects</h1>
        </div>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel fade>
            <Carousel.Item interval={2000}>
              <Card
                className="text-center d-block mx-auto"
                border="secondary"
                style={{ width: "20rem" }}
              >
                <div className="cardheader">
                  <Card.Header>React Portfolio</Card.Header>
                </div>
                <Card.Img variant="top" src={joylogo} />
                <p></p>
                <Card.Body>
                <p></p>
                  <div className="cardbody">
                    <Card.Title>React Portfolio</Card.Title>
                    <p></p>
                    <Card.Text>
                      This very portfolio you're viewing was developed by
                      myself, from scratch, using React. Feel free to browse my GitHub repo!
                    </Card.Text>
                  </div>
                  <p></p>
                  <a
                    className="link"
                    href="https://github.com/Joydotcom/react-portfolio"
                  >
                    {" "}
                    GitHub Link{" "}
                  </a>
                  <p></p>
                  <a
                    className="link"
                    href="https://joydotcom.github.io/react-portfolio"
                  >
                    {" "}
                    Deployed Link
                  </a>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <Card
                className="text-center d-block mx-auto"
                border="secondary"
                style={{ width: "20rem" }}
              >
                <div className="cardheader">
                  <Card.Header>Local Roots App</Card.Header>
                </div>
                <Card.Img variant="top" src={localroots} />
                <p></p>
                <Card.Body>
                <p></p>
                  <div className="cardbody">
                    <Card.Title>Local Roots Project</Card.Title>
                    <p></p>
                    <Card.Text>
                      Local Roots is an app I designed, with react, as part of a
                      team. I am fully responsible for the Front-End design of
                      this app. The purpose of this app is to provide a
                      marketplace for plant lovers.
                    </Card.Text>
                  </div>
                  <p></p>
                  <a
                    className="link"
                    href="https://github.com/julesscheil/Local-Roots"
                  >
                    {" "}
                    GitHub Link{" "}
                  </a>
                  <p></p>
                  <a
                    className="link"
                    href="https://damp-reef-27856.herokuapp.com/"
                  >
                    {" "}
                    Deployed Link
                  </a>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <Card
                className="text-center d-block mx-auto"
                border="secondary"
                style={{ width: "20rem" }}
              >
                <div className="cardheader">
                  <Card.Header>GamerZ App</Card.Header>
                </div>
                <Card.Img variant="top" src={gamerz} />
                <Card.Body>
                <p></p>
                  <div className="cardbody">
                    <Card.Title> gamerZ </Card.Title>
                    <p></p>
                    <Card.Text>
                      GamerZ is an app I helped design in collaboration with a
                      team. The purpose of this app is to provide a central
                      place for gamers to build online communities based on
                      their consoles and favorite games.
                    </Card.Text>
                  </div>
                  <p>
                  <a
                    className="link"
                    href="https://github.com/greenkimparsons/gamerz"
                  >
                    {" "}
                    GitHub Link{" "}
                  </a>
                  </p>
                  <p>
                  <a
                    className="link"
                    href="https://afternoon-garden-82475.herokuapp.com/"
                  >
                    {" "}
                    Deployed Link
                  </a></p>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <Card
                className="text-center d-block mx-auto"
                border="secondary"
                style={{ width: "20rem" }}
              >
                <div className="cardheader">
                  <Card.Header>Scheduler</Card.Header>
                </div>
                <Card.Img variant="top" src={schedule} />
                <Card.Body>
                <p></p>
                  <div className="cardbody">
                    <Card.Title>Scheduler</Card.Title>
                    <p></p>
                    <Card.Text>
                      Here, you'll find a fully functioning Scheduler that makes
                      use of local storage!
                    </Card.Text>
                  </div>
                  <p></p>
                  <a
                    className="link"
                    href="https://github.com/Joydotcom/workday-scheduler"
                  >
                    {" "}
                    GitHub Link{" "}
                  </a>
                  <p></p>
                  <a
                    className="link"
                    href="https://joydotcom.github.io/workday-scheduler/"
                  >
                    {" "}
                    Deployed Link
                  </a>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
              <Card
                className="text-center d-block mx-auto"
                border="secondary"
                style={{ width: "20rem" }}
              >
                <div className="cardheader">
                  <Card.Header>Code Refactor</Card.Header>
                </div>
                <Card.Img variant="top" src={refactor} />
                <Card.Body>
                <p></p>
                  <div className="cardbody">
                    <Card.Title>Code Refactor</Card.Title>
                    <p></p>
                    <Card.Text>
                      Feel free to browse my GitHub repo to see how I refactored
                      the code for this site.
                    </Card.Text>
                  </div>
                  <p></p>
                  <a
                    className="link"
                    href="https://github.com/Joydotcom/horiseon-code-refactor"
                  >
                    {" "}
                    GitHub Link{" "}
                  </a>
                  <p></p>
                  <a
                    className="link"
                    href="https://joydotcom.github.io/horiseon-code-refactor/"
                  >
                    {" "}
                    Deployed Link
                  </a>
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
