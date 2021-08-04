import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { Page } from "../../components/index";

// @inject("store", "letterStore")
// @withRouter
// @inject("store")
@inject("store", "letterStore")
@observer
class A extends Component {
  goToPage = () => {
    this.props.history.push("/b");
  };

  doStore = () => {
    this.props.letterStore.doStore();
  };

  setName = () => {
    this.props.store.setName("f");
  };

  setLetter = () => {
    this.props.letterStore.setLetter("zzz");
  };

  render() {
    return (
      <Page>
        A<div onClick={this.goToPage}>跳转到B</div>
        <Link to="/b">跳转到B_Link</Link>
        <div>store.name = {this.props.store.name}</div>
        <div>letterStore.letter = {this.props.letterStore.letter}</div>
        <div onClick={this.doStore}>doStore()</div>
        <div onClick={this.setName}>setName('f')</div>
        <div onClick={this.setLetter}>setLetter('zzz')</div>
      </Page>
    );
  }
}

export default A;
