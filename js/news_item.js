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
    // var album = this.props.imgs.map(function(img){
    //   return <img src={img}>
    // })
    return(
      <h3 onClick={this.onClickHandle.bind(this,this.props.desc)}>{this.props.desc}</h3>);
  }
}
