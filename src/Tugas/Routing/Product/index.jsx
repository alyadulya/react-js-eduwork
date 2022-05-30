import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import json from "../data/items.json";

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}

export const img = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

const items = json.data;

const Product = () => {
    return (
        <Container>
            <h2 className="mb-3">Products</h2>
            <Row>
                {
                    items.map((item, i) =>
                    <Col key={i}>
                        <Card>
                            <Card.Img variant="top" src={img[item.image]} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.price}</Card.Text>
                                <Link to={`../item/${item.id}`}>
                                    <Button variant="primary">Lihat detail</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                }
            </Row>
        </Container>
    )
}

export default Product;