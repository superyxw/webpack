import React from "react";
import ReactDOM from "react-dom";
import HelloWorldComponent from "./helloworld.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {times:0};
    }

    onClickCount(){
      this.state.times = this.state.times+1;
      alert("touch"+this.state.times);
    }

    render() {
        return (

<HelloWorldComponent onClickCount={this.onClickCount.bind(this)}/>

);
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));
