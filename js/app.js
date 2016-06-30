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
				/*notes是从数据库读取到的笔记数组*/
				// console.log("请求成功了耶！！但是...数据呢？...");
        var obj = eval(result);

				this.setState({
					news: obj.results
				});
				// console.log(this.state.notes);
			}.bind(this),
			error : function(){
				console.log("视图渲染失败...");
			}
		});
	}

    render() {
        return (
          <div>
<Head/>
<NewsList news={this.state.news}/>
</div>
);
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));
