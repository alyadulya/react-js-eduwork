import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsApp from "./NewsApp/NewsApp";

const Hook = () => {
    // apiKey: "5786c1e8258840478840520e14bf8857",
    // apiKey: "0707a3314c3a48cdaf9d48865f459408",

    let [query, setQuery] = useState('');
    let [data, setData] = useState([]);
    let [dataCount, setCount] = useState(0);
    let [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getData =  async () => {
            const res = await axios(
                `https://newsapi.org/v2/top-headlines?q=${query}&country=id&apiKey=0707a3314c3a48cdaf9d48865f459408`
                );
                setData(res.data.articles);
                setCount(res.data.totalResults);
                setLoading(false);
                console.log(res.data.totalResults);
                console.log(res.data.articles);
            }
        getData()
    }, [query])

    return (
        <div>
            <Navbar bg="success" variant="dark">
                <Container>
                    <Navbar.Brand>React News App</Navbar.Brand>
                </Container>
            </Navbar>
            <div id="content">
                <Container className="my-5">
                    <Form.Control type="text" value={query} onChange={(e) => { setLoading(true); setQuery(e.target.value); }} id="search" className="py-3" placeholder="Search news ..." />
                </Container>
                <Container id="news-content">
                    <div id="newsApp" className="newsApp">
                        <NewsApp data={data} count={dataCount} isLoading={isLoading} />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hook;