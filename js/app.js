import React from "react";
import ReactDOM from "react-dom";
import $ from "./jquery.min.js";
import NewsList from "./news_list.js";
import Head from "./head.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {news:[]};
    }

    componentDidMount(){
		$.ajax({
			url : "http://gank.io/api/random/data/Android/20",
			type : "get",
			dataType : "json",
			cache : false,
			success : function(result){
				this.setState({
					news: result.results
				});
			}.bind(this),
			error : function(){
				console.log("获取失败...");
			}
		});
	}

    render() {
        return (
          <div className="container">
            <Head/>
            <NewsList news={this.state.news}/>
        </div>
      );
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));
