import { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px"
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'rgb(0, 0, 219)'; // slightly darker blue
      this.bgColor = 'rgb(229, 229, 255)'; // slightly lighter blue
    }
  }

class ErrorAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'rgb(158, 0, 0)'; // darker red
      this.bgColor = 'rgb(255, 229, 229)'; // lighter red
    }
  }

class WarningAlert extends Alert {
    constructor(props) {
      super(props);
    this.color = 'rgb(151, 101, 7)'; // orange-ish brown
    this.bgColor = 'rgb(255, 241, 224)'; // extremely light orange
    }
  }

  export { InfoAlert, ErrorAlert, WarningAlert };