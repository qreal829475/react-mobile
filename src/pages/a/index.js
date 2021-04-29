import React, { Component } from "react";
import { withRouter } from "react-router-dom";

@withRouter
class A extends Component {
  goToPage = () => {};

  render() {
    return (
      <div>
        A<div onClick={this.goToPage}>跳转到B</div>
      </div>
    );
  }
}

export default A;
