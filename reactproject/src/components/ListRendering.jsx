import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();
    this.state = {
      items: ["Apple", "Banana", "Cherry"]
    };
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
export default List;