import { Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import json from "../../data/items.json";

const items = json.socmed;

const Socmed = () => {
    return (
        <Row className="justify-content-md-center">
            {
                items.map((item, i) => 
                <Col lg="2" key={i}>
                    <OverlayTrigger key="bottom" placement="bottom" overlay={
                        <Tooltip id="tooltip-bottom">
                            {item.name}
                        </Tooltip>
                    }>
                        <a href={`https://www.${item.name}.com`} target="_blank" rel="noreferrer" className="link">
                            <Card border="light" style={{backgroundColor: item.backgroundColor, backgroundImage: item.backgroundImage}}>
                                <Card.Body>
                                    <Card.Title className="mb-4">
                                        <i className={`fa-brands fa-xl fa-${item.name.toLowerCase()} text-light`}></i>
                                    </Card.Title>
                                    <div className="name profile-name text-light">{item.profileName}</div>
                                    <div className="name user-name text-light">{item.userName}</div>
                                </Card.Body>
                            </Card>
                        </a>
                    </OverlayTrigger>
                </Col>
                )
            }
        </Row>
    )
}

export default Socmed;