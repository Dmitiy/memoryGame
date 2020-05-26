import React, { Component } from 'react';
import Card from '../card';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
  }
  handleClick = (id) => {
    this.setState({ selected: [...this.state.selected, id] });
  };
  render() {
    const cards = this.props.cards;
    const selected = this.state.selected;
    return (
      <ul>
        {cards.map((item) => (
          <Card
            key={item}
            card={item}
            selected={selected.indexOf(item) !== -1}
            onClick={this.handleClick}
          />
        ))}
      </ul>
    );
  }
}

export default Board;
