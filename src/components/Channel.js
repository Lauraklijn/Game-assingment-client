import React, { Component } from "react";
import { connect } from "react-redux";

export class Channel extends Component {
  render() {
    return <div>Hello</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
