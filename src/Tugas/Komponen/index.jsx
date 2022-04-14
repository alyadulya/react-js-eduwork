import React from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

export default class Komponen extends React.Component {

    render() {
        return(
            <div>
                <FirstComponent />
                <SecondComponent />
            </div>
        )
    }

}