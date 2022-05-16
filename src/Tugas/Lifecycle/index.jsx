import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NewsApp from "./NewsApp/NewsApp";

export default class Lifecycle extends React.Component {
    render() {
        return (
            <div>
                <NewsApp />
            </div>
        )
    }
}