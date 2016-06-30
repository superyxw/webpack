"use strict";
import React from "react";
import NewsItem from "./news_item.js";

export default class NewsList extends React.Component{
  constructor() {
      super();
      this.state = {};
  }

  render(){

    var news_items=this.props.news.map( function(data,index){
			return <NewsItem key = {index} imgs={data.imgs} url={data.url} desc={data.desc}/>;
		});
    // var news_items = [];
    return(
      <div>{news_items}</div>
    );
  }
}
