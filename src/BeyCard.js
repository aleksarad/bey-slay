import React from "react";

export default class BeyCard extends React.Component {
  render() {
    const { id, name, img } = this.props.bey
    return (
      <div onClick={() => this.props.toggleFave(id)} className='bey-card'>
        <h3>{name}</h3>
        <img src={img}></img>
      </div>
    )
  }
}
