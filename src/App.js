import React, { Component } from "react";
import "./App.css";
import BeyContainer from "./BeyContainer.js"
import Favorites from "./Favorites.js"

class App extends Component {

  state = {
    beys: []
  }

  //get all beys
  componentDidMount() {
    fetch('http://localhost:4000/beys')
    .then(res => res.json())
    .then(beys => this.setState({beys: beys}))
  }

  filterBeys = (trueOrFalse) => {
    const beys = this.state.beys 
    const filteredBeys = beys.filter(bey => bey.favorite === trueOrFalse)
    return filteredBeys
  }

  toggleFave = (id) => {
    const updateBeys = this.state.beys
    const foundBey = updateBeys.find(bey => bey.id === id)
    foundBey.favorite = !foundBey.favorite
    this.setState({ beys: updateBeys })
  }


  render() {
    return (
      <div className="main-container">
        <BeyContainer toggleFave={this.toggleFave} beys={this.filterBeys(false)}/>
        <Favorites toggleFave={this.toggleFave} beys={this.filterBeys(true)} />
      </div>
    )
  }
}

export default App;
