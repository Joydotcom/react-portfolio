import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const MultiCarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default MultiCarouselPage;

// import React, { Component } from "react";
// import { CardDeck, Button, Container, Card } from "react-bootstrap";
// import Carousel from "react-bootstrap/Carousel";
// import schedule from "./img/schedule2.jpg";
// import joylogo from "./img/joylogo2.PNG";
// import localroots from "./img/localroots2.JPEG";

// import refactor from "./img/refactor2.JPG";
// import "./style.css";


// export class BootstrapCarousel extends Component {
//   render() {
//     return (
//       <div className="allproject">
//         <Container >
//           <Carousel fade>
//             <Carousel.Item interval={1000}>
//               <Card className="text-center" border="secondary" style={{ width: "30rem" }}>
//               <div className="cardheader">
//                 <Card.Header>React Portfolio</Card.Header>
//                 </div>
//                 <Card.Img variant="top" src={joylogo} />
                
//                 <Card.Body>
//                   <div className="cardbody">
//                   <Card.Title>React Portfolio</Card.Title>
//                   <Card.Text>
//                     This very portfolio you're viewing was developed by myself,
//                     from scratch. Feel free to browse my GitHub repo!
//                   </Card.Text>
//                   </div>
//                   <Card.Link href="#">Card Link</Card.Link>
//                   <Card.Link href="#">Another Link</Card.Link>
//                 </Card.Body>
//               </Card>
//             </Carousel.Item>
    
//             <Carousel.Item interval={1000}>
//               <Card className="text-center" border="secondary" style={{ width: "30rem" }}>
//                 <div className="cardheader">
//                 <Card.Header>Local Roots App</Card.Header>
//                 </div>
//                 <Card.Img variant="top" src={localroots} />
//                 <Card.Body>
//                 <div className="cardbody">
//                   <Card.Title>Local Roots Project</Card.Title>
//                   <Card.Text>
//                   Local Roots is an app I designed with react. The purpose of
//                     this app is to provide a marketplace for plant lovers.
//                   </Card.Text>
//                   </div>
//                   <Card.Link href="#">Card Link</Card.Link>
//                   <Card.Link href="#">Another Link</Card.Link>
//                 </Card.Body>
//               </Card>
//             </Carousel.Item>

//             <Carousel.Item interval={1000}>
//               <Card className="text-center" border="secondary" style={{ width: "30rem" }}>
//                 <div className="cardheader">
//                 <Card.Header>Scheduler</Card.Header>
//                 </div>
//                 <Card.Img variant="top" src={schedule} />
//                 <Card.Body>
//                 <div className="cardbody">
//                   <Card.Title>Scheduler</Card.Title>
//                   <Card.Text>
//                   Here, you'll find a fully functioning Scheduler that makes
//                     use of local storage!
//                   </Card.Text>
//                   </div>
//                   <Card.Link href="#">Card Link</Card.Link>
//                   <Card.Link href="#">Another Link</Card.Link>
//                 </Card.Body>
//               </Card>
//             </Carousel.Item>

//             <Carousel.Item interval={1000}>
//               <Card className="text-center" border="secondary" style={{ width: "40rem" }}>
//                 <div className="cardheader">
//                 <Card.Header>Code Refactor</Card.Header>
//                 </div>
//                 <Card.Img variant="top" src={refactor} />
//                 <Card.Body>
//                 <div className="cardbody">
//                   <Card.Title>Code Refactor</Card.Title>
//                   <Card.Text>
//                   Feel free to browse my GitHub repo to see how I refactored
//                     the code for this site.
//                   </Card.Text>
//                   </div>
//                   <Card.Link href="#">Card Link</Card.Link>
//                   <Card.Link href="#">Another Link</Card.Link>
//                 </Card.Body>
//               </Card>
//             </Carousel.Item>

  

        
//           </Carousel>
//         </Container>
//       </div>
//     );
//   }
// }

// export default BootstrapCarousel;


