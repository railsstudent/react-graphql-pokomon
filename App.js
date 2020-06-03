import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Angular'
    };
  }

  render() {
    return (
      <div>
        <p>Hello {this.state.name}</p>
      </div>
    );
  }
}