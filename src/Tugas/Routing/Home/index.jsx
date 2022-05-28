import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <h1>Welcome to Dummy Marketplace</h1>
                    <p>We offer the best and most sophisticated computer device from several popular brands, which will bolster your daily business in order to obtain a better life.</p>
                    <h4 className="mb-4">What are you waiting for? Check out our products now!</h4>
                    <Link to="product"><Button variant="primary">Buy something</Button></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;