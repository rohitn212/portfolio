import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section>
        <h2>Hi my name is {this.props.name}</h2>
        <h3>{this.props.introduction}</h3>
      </section>
    );
  }
}

export default About;
