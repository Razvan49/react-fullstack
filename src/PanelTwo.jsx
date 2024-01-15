import React, { Component } from "react";

// Class component
export default class PanelTwo extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       counter: this.props.startingValue,
  //     };
  //     this.title = "Panou Nou";
  //   }

  static defaultProps = {
    startingValue: 0,
  };

  static title = "Panou Nou";

  state = {
    counter: this.props.startingValue,
  };

  render() {
    const { index } = this.props;

    return (
      <div>
        <h2>{this.tile}</h2>
        <h4>Numaratoare: {this.state.counter}</h4>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Click
        </button>
        <h3>Index {index}</h3>
        <p>Panel Class Component</p>
      </div>
    );
  }
}
