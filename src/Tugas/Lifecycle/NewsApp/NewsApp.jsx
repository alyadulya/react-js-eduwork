import axios from "axios";
import React from "react";
import { Card, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import { Bars } from "react-loader-spinner";

export default class NewsApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            data: [],
            apiKey: "0707a3314c3a48cdaf9d48865f459408",
        }
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?q=${this.state.query}&country=id&apiKey=${this.state.apiKey}`).then(res => {
            const data = res.data.articles;
            this.setState({ data });
        })
    }

    search = async val => {
        const res = await axios(
            `https://newsapi.org/v2/top-headlines?q=${val}&country=id&apiKey=${this.state.apiKey}`
        );
        let data = await res.data.articles;
        if(res.data.totalResults == 0) {
            data = null;
        }
        this.setState({ data });
    };

    onReady = callback => {
        var intervalId = window.setInterval(function() {
            if (document.getElementById('news-content') !== undefined) {
                window.clearInterval(intervalId);
                callback.call(this);
            }
        }, 1000);
    }

    setVisible = (selector, visible) => {
        document.querySelector(selector).style.display = visible ? 'block' : 'none';
    }
    
    cb = () => {
        this.setVisible('.newsApp', true);
        this.setVisible('#loader', false);
    };

    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ query: e.target.value });
    };

    render() {
        return (
            <div>
                <Navbar bg="success" variant="dark">
                    <Container>
                        <Navbar.Brand>React News App</Navbar.Brand>
                    </Container>
                </Navbar>
                <div id="content">
                    <Container className="my-5">
                        <Form.Control type="text" value={this.state.query} onChange={e => this.onChangeHandler(e)} id="search" className="py-3" placeholder="Search news ..." />
                    </Container>
                    <Container id="news-content" onLoad={this.onReady(this.cb)}>
                        <div id="newsApp" className="newsApp">
                            <Row>
                            {
                                !this.state.data ?
                                <h1>No results</h1> :
                                this.state.data.map((news, i) =>
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
                        </div>
                        <div id="loader">
                            <Bars color="#198754" height={80} width={80} />
                        </div>
                    </Container>
                </div>
            </div>
            
        )
    }
}