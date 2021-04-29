import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Page } from "../../components/index";

@withRouter
class A extends Component {
  goToPage = () => {
    this.props.history.push("/b");
  };

  render() {
    return (
      <Page>
        A<div onClick={this.goToPage}>跳转到B</div>
        <Link to="/b">跳转到B_Link</Link>
      </Page>
    );
  }
}

export default A;
