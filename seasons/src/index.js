import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = {
    latitude: null,
    errorMessage: null,
    isLoading: true
  };

  componentDidMount() {
    this.getUserPosition();
  }

  getUserPosition = () => {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({ latitude: position.coords.latitude, isLoading: false }),
      err => this.setState({ errorMessage: err.message, isLoading: false })
    );
  };

  render() {
    const { latitude, errorMessage, isLoading } = this.state;
    const renderError = (
      <div className="ui negative message">
        <div className="header">Error</div>
        <p>{errorMessage}</p>
      </div>
    );

    return (
      <div style={{ border: "10px solid red" }}>
        {isLoading && (
          <Spinner text="Please allow us to access your location" />
        )}
        {latitude && <SeasonDisplay latitude={latitude} />}
        {errorMessage && renderError}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
