import React from "react";
import NewsItem from "./news_item.js";

export default class NewsList extends React.Component{
  constructor() {
      super();
      this.state = {};
  }

  render(){

    var style = {
      margin:"100px 0px",
    }
    var news_items=this.props.news.map((data,index)=>{
			return <NewsItem key = {index} imgs={data.imgs} url={data.url} desc={data.desc}/>;
		});
    return(
      <div style={style}>{news_items}</div>
    );
  }
}
