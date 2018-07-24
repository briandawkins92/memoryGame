import React, { Component } from "react";
import KardashKard from "./components/KardashKard";
import Wrap from "./components/Wrap";
import Title from "./components/Title";
import family from "./kardash.json";
import "./App.css";

class App extends Component {
  // Setting this.state.members to the members json array score set to 0 and clicked state
  state = {
    family: family,
    score: 0,
    clicked: []

  };

  shufflemembers = id => {
    // Filter this.state.members for members with an id not equal to the id being removed
    const family = this.shuffle(this.state.family);
    // Set this.state.members equal to the new members array
    this.setState({ family });

    this.decisionDepot(id);
  };

  decisionDepot(id) {
    if (this.state.clicked.indexOf(id) === -1) {
      let newState = [...this.state.clicked, id]
      this.setState({
        clicked: newState, score: this.state.score + 1
      })

    }
    else {
      this.setState({
        clicked: [], score: 0

      })
    }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }


  winner() {
    if (this.state.score === 5) {
      return (<div>
        <p>Winner!</p>
      </div>)
    }
  }
  // Map over this.state.members and render a memberCard component for each member object
  render() {
    const isThereWinner = this.winner();
    return (
      <Wrap>
        <Title>Kardashian Jenner West Memory Game!
        {isThereWinner}
        <p>Score:{this.state.score}</p>
        </Title>

        {this.state.family.map(family => (
          <JusticeCard
            shufflefamily={this.shufflefamily}
            id={family.id}
            key={family.id}
            image={family.image}
          />
        ))}
      </Wrap>
    );
  }
}

export default App;
