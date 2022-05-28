import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Product from "./Product";
import Navigation from "./Navigation";
import About from "./About";
import Item from "./Item";

const Routing = () => {
    return (
        <div>
            <Router>
                <Navigation />
                <div className="my-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="product" element={<Product />} />
                        <Route path="about/*" element={<About />} />
                        <Route path="item/:id" element={<Item />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default Routing;