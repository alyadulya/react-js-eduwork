import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import i from "../data/items.json";
import { img } from "../Product/index.jsx";

const Item = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const items = i.data;
    
    return (
        <Container>
            <Row>
                <Col xs={5}>
                    <Image src={img[items[id-1]["image"]]} width="100%" />
                </Col>
                <Col>
                    <h2>{items[id-1]["name"]}</h2>
                    <h4 className="mb-4">{items[id-1]["price"]}</h4>
                    <p>{items[id-1]["description"]}</p>
                    <Button variant="primary" onClick={() => alert('coming soon ...')}>Beli</Button>{' '}
                    <Button variant="secondary" onClick={() => navigate(-1)}>Kembali</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Item;