import { Card, Col, Row } from "react-bootstrap";
import Loader from "./Loader";

const NewsApp = ({ data, count, isLoading }) => {
    return isLoading ? (
        <Loader />
        ) : (
        <Row>
            {
                (count === 0) ?
                <h3>No results</h3> :
                data.map((news, i) =>
                    <Col sm={4} key={i}>
                        <Card className="mb-2">
                            <img src={news.urlToImage} className="card-img-top" alt="" />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                <Card.Text className="text-secondary">
                                    { !news.author ? news.source.name : news.author } - {new Date(news.publishedAt).toLocaleString("id-ID")}
                                </Card.Text>
                                <Card.Text className="desc">
                                    <span>
                                        {
                                            !news.content ?
                                            news.description :
                                            news.content.slice(0, news.content.indexOf("["))
                                        }
                                    </span>
                                </Card.Text>
                                <a href={news.url} className="btn btn-success" target="_blank" rel="noreferrer">Read more...</a>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            }
            </Row>
    )
}

export default NewsApp;