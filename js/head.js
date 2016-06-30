import React from "react"

export default class Head extends React.Component {
  constructor() {
    super();
      this.state = {};
  }

  render(){
    return(<nav className="navbar navbar-default navbar-fixed-top" role="navigation">
    <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse"
                data-target="#example-navbar-collapse">
            <span className="sr-only">切换导航</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">骁烈</a>
    </div>
    <div className="collapse navbar-collapse" id="example-navbar-collapse">
        <ul className="nav navbar-nav">
            <li className="active"><a href="#">iOS</a></li>
            <li><a href="#">SVN</a></li>
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    Java <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                    <li><a href="#">jmeter</a></li>
                    <li><a href="#">EJB</a></li>
                    <li><a href="#">Jasper Report</a></li>
                    <li className="divider"></li>
                    <li><a href="#">分离的链接</a></li>
                    <li className="divider"></li>
                    <li><a href="#">另一个分离的链接</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>);
  }
}
