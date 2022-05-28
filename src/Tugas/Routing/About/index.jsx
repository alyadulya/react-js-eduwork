import { Col, Container, Image, Nav, Row, Table } from "react-bootstrap";
import { Routes, Route, NavLink } from "react-router-dom";
import { img } from "../Product/index.jsx";
import Socmed from "./Section/Socmed.jsx";

const About = () => {
    return (
        <Container>
            <h2>About us</h2>
            <Nav variant="tabs" className="mb-3">
                <Nav.Item>
                    <NavLink to="contact" className="nav-link" aria-current="page">Contact</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="partners" className={({ isActive }) => isActive ? ("nav-link active") : ("nav-link") }>Partners</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="socmed" className={({ isActive }) => isActive ? ("nav-link active") : ("nav-link") }>Social media</NavLink>
                </Nav.Item>
            </Nav>
            <Routes>
                <Route path="contact" element={
                    <Table borderless="true" size="sm">
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td><a href="mailto:dummy@marketplace.com">dummy@marketplace.com</a></td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>:</td>
                                <td>(+62)754-40303</td>
                            </tr>
                        </tbody>
                    </Table>
                } />
                <Route path="partners" element={
                    <Row className="d-flex align-items-center text-center">
                        <Col><Image src={img["Lenovo.png"]} width="65%" /></Col>
                        <Col><Image src={img["Asus.png"]} width="65%" /></Col>
                        <Col><Image src={img["Acer.png"]} width="65%" /></Col>
                    </Row>
                } />
                <Route path="socmed" element={<Socmed />} />
            </Routes>
        </Container>
    )
}

export default About;