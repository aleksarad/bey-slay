import React, { Component } from "react";
import BeyCard from "./BeyCard.js"

export default class Favorites extends Component {
  render() {
    const { beys } = this.props
    return (
      <div className="favorites">
        <h1>BEYVORITES</h1>
        {beys.map(bey => <BeyCard toggleFave={this.props.toggleFave} key={bey.id} bey={bey} />)}
      </div>
    );
  }
}
