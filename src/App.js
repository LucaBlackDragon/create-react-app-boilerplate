import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { connect } from 'react-redux';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter/>
      </div>
    );
  }
}

export default App;

// function mapStateToProps(state) {
//   return {
//     counter: state.counter
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrement: () => dispatch({ type: 'INCREMENT' }),
//     onDecrement: () => dispatch({ type: 'DECREMENT' }),
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
