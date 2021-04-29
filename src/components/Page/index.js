import React, { Component } from "react";

const pageStyle = {
  width: "100%",
  height: "100%",
  overflow: "auto",
  position: "absolute",
  top: 0,
  left: 0,
  background: "#ffffff",
};

export default class Page extends Component {
  render() {
    return (
      <div className="page" style={pageStyle}>
        {this.props.children}
      </div>
    );
  }
}
