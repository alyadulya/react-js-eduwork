import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Button, Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

function linkedin() {
    window.location.assign("https://id.linkedin.com/in/alyad-ulya-iman")
}

export default class Styling extends React.Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#">Alyad Ulya Iman</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#biografi">Biografi</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
                    <Container fluid className="py-5 text-center">
                        <p className="fs-5 fst-italic mt-5">Eduwork Student</p>
                        <h1 className="display-4">Alyad Ulya Iman</h1>
                        <Button onClick={linkedin} variant="outline-dark" size="sm" className="btn-warning mt-5 text-white px-3 py-2">LinkedIn Profile</Button>
                    </Container>
                </div>
                
                <Container className="text-center" id="biografi">
                    <h3 className="fs-bold fs-2">Biografi Saya</h3>
                    <p className="fs-6 fst-italic fw-light">Hai, perkenalkan saya Alyad Ulya Iman. Saat ini saya sedang mengikuti kelas ReactJS & NodeJS di Eduwork yang dimentori oleh Rayhan Rafiud Darojat. Saya baru saja menyelesaikan studi di Universitas Sumatera Utara pada Desember 2021 lalu.</p>

                    <Row>
                        <Col lg="4" md="4" sm="12">
                            <h6 className="fs-5">Fresh Graduate</h6>
                            <p className="fw-light">Recently finished my study at University of Sumatera Utara majoring in Information Technology.</p>
                        </Col>
                        <Col lg="4" md="4" sm="12">
                            <h6 className="fs-5">Experience</h6>
                            <p className="fw-light">Despite my education background, I have never worked in IT related field, except one little freelance work at 2020. That was my first web project collaborating with a friend.</p>
                        </Col>
                        <Col lg="4" md="4" sm="12">
                            <h6 className="fs-5">Other Interest</h6>
                            <p className="fw-light">Beside IT stuff, I also keen on some other things like writing, music & film, and football, in which often times I spend some times to them.</p>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5" id="contact">
                    <h3 className="fs-bold fs-2 text-center mb-3">Contact</h3>
                    <Card className="mx-auto" style={{width: "500px"}}>
                        <Card.Body>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="ExampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your message ..."></textarea>
                            </div>
                            <div className="d-grid gap-2">
                                <Button className="btn-warning text-white px-3 py-2" variant="outline-dark" size="sm">Send</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>

                <Container fluid className="bg-dark mb-0 mt-5">
                    <p className="text-white text-center footer">
                        &copy; 2022 Eduwork, Inc. All rights reserved.
                    </p>
                </Container>
            </div>
        )
    }
}
