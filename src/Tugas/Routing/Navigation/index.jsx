import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./index.css"

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav variant="pills">
                        <Nav.Item><NavLink to="/" className="nav-link" aria-current="page">
                            <i className="fa fa-fw fa-house-chimney"></i> Home
                        </NavLink></Nav.Item>
                        <Nav.Item><NavLink to="product" className={({ isActive }) => isActive ? ("nav-link active") : ("nav-link") }>
                            <i className="fa fa-fw fa-box"></i> Product
                        </NavLink></Nav.Item>
                        <Nav.Item><NavLink to="about" className={({ isActive }) => isActive ? ("nav-link active") : ("nav-link") }>
                            <i className="fa fa-fw fa-circle-info"></i> About
                        </NavLink></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;