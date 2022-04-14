import React from "react";

class SecondComponent extends React.Component {

    state = {
        bgColor: ["red", "green", "blue"],
        index: 0,
    }

    changeBgColor = () => {
        var len = this.state.bgColor.length;
        var idx = this.state.index;
        var element = document.getElementById("text").style;
        if(idx < len - 1) {
            this.setState({index: idx + 1});
        } else if(idx === len - 1) {
            this.setState({index: 0});
        }
        console.log(idx);
        element.backgroundColor = this.state.bgColor[idx];
        element.color = "#fff";
    }

    render() {
        return(
            <div>
                <span id="text" onClick={this.changeBgColor}>Click this text to change the background color</span>
            </div>
        )
    }

}

export default SecondComponent;