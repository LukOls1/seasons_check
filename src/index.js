import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDesplay';
import Spinner from './Spinner';

class App extends Component {

    state = {
        lat: null,
        error: '',
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ error: err.message }),
        );
    }
    render() {
        if (!this.state.lat && this.state.error) {
            return <div>Error: {this.state.error}</div>;
        }
        if (this.state.lat && !this.state.error) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner message="Please accept location request" />;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

