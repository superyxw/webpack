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
    var style={
          height:"334px"
        };
    var title_style={
      position: "absolute",
      bottom: "20px"
    }
    return(
      <div className="col-sm-6 col-md-4 col-lg-3 ">
        <div style={style} className="thumbnail" onClick={this.onClickHandle.bind(this,this.props.desc)} >
        <div style={title_style}>{this.props.desc}</div>
        </div>
      </div>
    );
  }

}
