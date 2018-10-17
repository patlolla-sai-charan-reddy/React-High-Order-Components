import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Apple = Component => {
  return class extends React.Component {
    state = { x: 0, y: 0 };
    handleMouseEvent = event => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    };
    render() {
      console.log({ ...this.props });
      return (
        <div onMouseMove={this.handleMouseEvent}>
          <Component mouse={this.state} />
        </div>
      );
    }
  };
};

class Apples extends React.Component {
  constructor() {
    super();
    console.log("1");
  }
  static getDerivedStateFromProps() {
    console.log("2");
  }
  componentDidMount() {
    console.log("4");
  }
  shouldComponentUpdate() {
    console.log("5");
    return true;
  }
  getSnapshotBeforeUpdate(e) {
    console.log("8", e);
  }
  componentDidUpdate() {
    console.log("99");
  }
  componentDidCatch() {
    console.log("errr");
  }
  componentWillUnmount() {
    console.log("9999");
  }
  render() {
    console.log("3");
    const { x, y } = this.props.mouse;
    return (
      <div>
        <p>
          {x}
          <hr />
          {y}
        </p>
      </div>
    );
  }
}

// https://cdb.reacttraining.com/use-a-render-prop-50de598f11ce

const AppWithMouse = Apple(Apples);

const rootElement = document.getElementById("root");
ReactDOM.render(<AppWithMouse />, rootElement);
