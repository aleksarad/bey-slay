import React from "react";
import BeyCard from "./BeyCard.js"

export default class BeyContainer extends React.Component {
  render() {
    const { beys } = this.props
    return (
      <div className="bey-container">
        <h1>BEYDEX</h1>
        {beys.map(bey => <BeyCard toggleFave={this.props.toggleFave} key={bey.id} bey={bey} />)}
      </div>
    );
  }
}
