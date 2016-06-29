import React from "react";

export default class NewsItem extends React.Component {
  constructor() {
      super();
      this.state = {};
  }

  render(){
    return(<h3>{this.props.desc}</h3>);
  }
}
