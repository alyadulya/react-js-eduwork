import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

export default class KomponenM extends React.Component {

    render() {
        return(
            <div>
                <ClassComponent nama="Alyad" />
                <FunctionalComponent nama="Rye" />
            </div>
        )
    }

}