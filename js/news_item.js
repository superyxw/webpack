import React from "react";

export default class NewsItem extends React.Component {
  constructor() {
      super();
      this.state = {};
  }

  onClickHandle(msg){
    alert(msg);
  }

  render(){

    return(<h3 onClick={this.onClickHandle.bind(this,this.props.desc)}>{this.props.desc}</h3>);
  }
}
