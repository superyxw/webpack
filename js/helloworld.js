"use strict";
import React from 'react';

export default class HelloWorldComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
      var style={
            color : "red"
          };
        return (

<div className="hello" style={style} >
<h1>Webpack Demo</h1>
<input type="button" value="确定" className="cancel_btn" onClick={ this.props.onClickCount }/>
</div>

);
    }
}
